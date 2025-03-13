const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Task = require('./models/Task');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/taskBD', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connecté à MongoDB");

    // Insérer quelques tâches par défaut si la base est vide
    Task.countDocuments({}, async (err, count) => {
        if (count === 0) {
            await Task.insertMany([
                { nom: 'Faire les courses', description: 'Acheter du lait et du pain' },
                { nom: 'Réviser le projet', description: 'Préparer la présentation' },
                { nom: 'Appeler le client', description: 'Confirmer le rendez-vous' }
            ]);
            console.log("Tâches par défaut insérées.");
        }
    });

}).catch(err => console.error("Erreur de connexion à MongoDB", err));



// GET toutes les tâches
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err });
    }
});

//  GET une tâche par ID
app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
        res.json(task);
    } catch (err) {
        res.status(400).json({ message: 'ID invalide', error: err });
    }
});

//  POST (Créer une tâche)
app.post('/tasks', async (req, res) => {
    try {
        const task = new Task({
            nom: req.body.nom,
            description: req.body.description
        });
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(400).json({ message: 'Erreur lors de la création', error: err });
    }
});

// PUT (Mettre à jour une tâche)
app.put('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
        res.json(task);
    } catch (err) {
        res.status(400).json({ message: 'Erreur lors de la mise à jour', error: err });
    }
});

// DELETE (Supprimer une tâche)
app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });
        res.status(204).send(); // Pas de contenu
    } catch (err) {
        res.status(400).json({ message: 'Erreur lors de la suppression', error: err });
    }
});


app.listen(port, () => console.log(`Serveur démarré sur le port ${port}`));
