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

    @PostMapping("/criar-novo")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<PerguntaRespostas> create (@RequestBody PerguntaRespostas perguntaRespostas) {
        PerguntaRespostas perguntaRespostasCreated = service.create(perguntaRespostas);
        return ResponseEntity.status(201).body(perguntaRespostasCreated);
    }

    @PutMapping("/atualizar/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable Long id, @RequestBody PerguntaRespostas novoPerguntaRespostas) {
        service.update(id, novoPerguntaRespostas);
    }

    @GetMapping("/todos")
    @ResponseStatus(HttpStatus.OK)
    public List<PerguntaRespostas> findAll() {
        return service.findAll();
    }

    @GetMapping("/pesquisar-por-id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<PerguntaRespostas> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PatchMapping("/desativar/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void unableById(@PathVariable Long id) {
        service.unableById(id);
    }

    @DeleteMapping("/deletar/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) {
        service.deleteById(id);
    }
}
