package com.reactquiz.reactquiz.repository;

import com.reactquiz.reactquiz.model.PerguntaRespostas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerguntaRespostasRepository extends JpaRepository<PerguntaRespostas, Long> {
}
