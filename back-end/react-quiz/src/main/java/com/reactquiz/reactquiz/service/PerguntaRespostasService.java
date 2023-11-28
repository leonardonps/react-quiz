package com.reactquiz.reactquiz.service;

import com.reactquiz.reactquiz.model.PerguntaRespostas;
import com.reactquiz.reactquiz.repository.PerguntaRespostasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PerguntaRespostasService {

    @Autowired
    PerguntaRespostasRepository repository;

    public PerguntaRespostas create(PerguntaRespostas perguntaRespostas) {
        return repository.save(perguntaRespostas);
    }

    public void update(Long id, PerguntaRespostas novoPerguntaRespostas) {
        Optional<PerguntaRespostas> paraAtualizarPerguntaRespostas = repository.findById(id);

        if(paraAtualizarPerguntaRespostas.isPresent()) {

            if(novoPerguntaRespostas.getPergunta() != null) {
                paraAtualizarPerguntaRespostas.get().setPergunta(novoPerguntaRespostas.getPergunta());
            }

            if(novoPerguntaRespostas.getRespostas() != null) {
                paraAtualizarPerguntaRespostas.get().setRespostas(novoPerguntaRespostas.getRespostas());
            }

            if(novoPerguntaRespostas.getRespostaCorreta() != null) {
                paraAtualizarPerguntaRespostas.get().setRespostaCorreta(novoPerguntaRespostas.getRespostaCorreta());
            }

            if(novoPerguntaRespostas.getAtivo() != null) {
                paraAtualizarPerguntaRespostas.get().setAtivo(novoPerguntaRespostas.getAtivo());
            }

            repository.save(paraAtualizarPerguntaRespostas.get());
        }
    }

    public List<PerguntaRespostas> findAll() {
        return repository.findAll();
    }

    public Optional<PerguntaRespostas> findById(Long id) {
        return repository.findById(id);
    }

    public void unableById(Long id) {
        Optional<PerguntaRespostas> perguntaRespostasToUnable = repository.findById(id);

        if (perguntaRespostasToUnable.isPresent()) {
            perguntaRespostasToUnable.get().setAtivo(false);
            repository.save(perguntaRespostasToUnable.get());
        }
    }
}
