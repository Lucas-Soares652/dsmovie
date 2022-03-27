package com.expert.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.expert.dsmovie.dto.MovieDTO;
import com.expert.dsmovie.entities.Movie;
import com.expert.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		
		Page<Movie> result = repository.findAll(pageable);
		
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x));
		
		return page;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		
		Movie result = repository.findById(id).get();
		
		MovieDTO dto = new MovieDTO(result);
		
		return dto;
	}
	
	@Transactional
	public Movie saveMovie(Movie newMovie) {
		
		Movie movie = repository.findByTitle(newMovie.getTitle());
		
		if(movie != null) {
			
			return null;
		}
		
		movie = new Movie();
		movie.setTitle(newMovie.getTitle());
		movie.setImage(newMovie.getImage());
		movie.setCount(0);
		movie.setScore(0.00);
		
		movie = repository.saveAndFlush(movie);
		
		return movie;
	}
}
