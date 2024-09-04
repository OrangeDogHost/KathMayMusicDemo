DROP TABLE events;
CREATE TABLE IF NOT EXISTS events ( name TEXT PRIMARY KEY, venue TEXT, time TEXT, date TEXT, price TEXT, description TEXT);

INSERT INTO events (name,venue,time,date,price,description) VALUES("Gig number 1", "Westpac Stadium", "12:00pm", "17th March 1986", "23", "Get your tickets at ticket master!");
INSERT INTO events (name,venue,time,date,price,description) VALUES("nameeeee2","venueeeee2","timeeeee2","dateeeee2","32","descriptionnnnn2");
INSERT INTO events (name,venue,time,date,price,description) VALUES("nameeeee3","venueeeee3","timeeeee3","dateeeee3","122","descriptionnnnn3");
INSERT INTO events (name,venue,time,date,price,description) VALUES("nameeeee4","venueeeee4","timeeeee4","dateeeee4","22","descriptionnnnn4");