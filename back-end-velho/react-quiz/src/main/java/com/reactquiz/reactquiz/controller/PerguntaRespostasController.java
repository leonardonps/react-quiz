package com.reactquiz.reactquiz.controller;

import com.reactquiz.reactquiz.model.PerguntaRespostas;
import com.reactquiz.reactquiz.service.PerguntaRespostasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pergunta-respostas")
public class PerguntaRespostasController {

    @Autowired
    PerguntaRespostasService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<PerguntaRespostas> create (@RequestBody PerguntaRespostas perguntaRespostas) {
        PerguntaRespostas perguntaRespostasCreated = service.create(perguntaRespostas);
        return ResponseEntity.status(201).body(perguntaRespostasCreated);
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<PerguntaRespostas> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<PerguntaRespostas> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void unableById(@PathVariable Long id) {
        service.unableById(id);
    }
}
