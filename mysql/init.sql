CREATE TABLE capivaras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    peso FLOAT NOT NULL,
    status_saude VARCHAR(255) NOT NULL,
    habitat VARCHAR(255) NOT NULL,
    comportamento TEXT,
    dieta TEXT,
    observacoes TEXT
);

INSERT INTO capivaras (nome, idade, peso, status_saude, habitat, comportamento, dieta, observacoes) VALUES
('Senhorita Bigodes', 4, 65, 'Saudável', 'Lago Sul', 'Muito ativa, gosta de nadar no lago durante a manhã.', 'Prefere pasto fresco e frutas, especialmente maçãs.', 'Costuma socializar com Diogenes, muitas vezes são vistos juntos.'),
('Helena', 3, 58, 'Saudável', 'Floresta Oeste', 'Não socializa bem com outras capivaras, frequentemente vista descansando à sombra.', 'Consome uma variedade de vegetação, incluindo folhas e capim.', NULL),
('Garibalda', 5, 70, 'Necessita de cuidados', 'Recinto Norte', 'Mais reservada, prefere ficar sozinha na maioria das vezes.', NULL, 'Diagnosticado com uma infecção no olho esquerdo, tratamento com colírio iniciado.'),
('Diógenes', 2, 55, 'Saudável', 'Lago Sul', 'Jovem e curioso, explora frequentemente novas áreas do recinto.', 'Gosta de uma dieta variada, incluindo frutas e vegetação densa.', 'Mostra interesse em explorar áreas fora do habitat designado, requer monitoramento extra.'),
('Darius III', 6, 72, 'Saudável', 'Lago Sul', 'Grande e dominante, tende a liderar o grupo nas interações sociais.', 'Prefere pasto grosso e casca de árvore.', 'Mostra comportamento protetor, especialmente quando está perto de Senhorita Bigodes.');
