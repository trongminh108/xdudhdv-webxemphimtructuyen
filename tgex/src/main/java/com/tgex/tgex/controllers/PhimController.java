package com.tgex.tgex.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PhimController {

    // @RequestMapping("/")
    // public String index() {
    // return "index";
    // }

    @RequestMapping("/hello")
    public String hello() {
        return "Hello";
    }
}
