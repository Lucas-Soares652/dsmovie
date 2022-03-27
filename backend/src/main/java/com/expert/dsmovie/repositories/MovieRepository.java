package com.expert.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expert.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
	
	Movie findByTitle(String Title);
}
