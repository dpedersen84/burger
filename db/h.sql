USE xhi7bxf8hgnz9s5r;

CREATE TABLE burgers (
	id INT(10)AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ("Big Mac", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Whopper", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Double Stack", false);

SELECT * FROM burgers
