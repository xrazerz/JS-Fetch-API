const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

let categories = require('./categories.json');

// GET all categories
app.get('/categories', (req, res) => {
    res.json(categories);
});

// GET category by id
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const category = categories.find(category => category.id === id);
    if (category) {
        res.json(category);
    } else {
        res.status(404).send('Category not found');
    }
});

// POST a new category
app.post('/categories', (req, res) => {
    const newCategory = req.body;
    if (!newCategory.images || !Array.isArray(newCategory.images) || newCategory.images.length === 0) {
        return res.status(400).send('Images are required');
    }
    categories.push(newCategory);
    fs.writeFile('categories.json', JSON.stringify(categories, null, 2), (err) => {
        if (err) throw err;
        res.status(201).json(newCategory);
    });
});

// PUT update a category
app.put('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCategory = req.body;
    categories = categories.map(category => category.id === id ? updatedCategory : category);
    fs.writeFile('categories.json', JSON.stringify(categories, null, 2), (err) => {
        if (err) throw err;
        res.json(updatedCategory);
    });
});

// DELETE a category
app.delete('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    categories = categories.filter(category => category.id !== id);
    fs.writeFile('categories.json', JSON.stringify(categories, null, 2), (err) => {
        if (err) throw err;
        res.status(204).send();
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});