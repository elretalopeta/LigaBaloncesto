package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Jugador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Jugador entity.
 */
public interface JugadorRepository extends JpaRepository<Jugador,Long> {

    public List<Jugador> findByNumCanastasGreaterThanEqual(int canastas);

    //id del objeto jugador con el nombre id
    @Query("select j from Jugador j where j.equipo.id=:id and j.numCanastas>=:canastas")
    public List<Jugador> equipoycanastas (@Param("id") Long id, @Param("canastas") Integer canastas);

}
