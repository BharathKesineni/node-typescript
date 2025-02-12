import {Router} from 'express';
//const express = require('express');
//const Router = require('express');
import {createTodo,deleteTodo,getTodos, updateTodo} from "../controllers/todos"

const router = Router();

router.post("/",createTodo);

router.get("/",getTodos);

router.patch("/:id",updateTodo);

router.delete("/:id",deleteTodo);  

export default router;