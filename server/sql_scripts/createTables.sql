USE todo;

CREATE TABLE IF NOT EXISTS Users (
	id BIGINT NOT NULL AUTO_INCREMENT,
	username VARCHAR(255) NOT NULL,
	authority VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
	) ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS Columns (
	id BIGINT NOT NULL AUTO_INCREMENT,
	column_name VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
	) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS Activities (
	id BIGINT NOT NULL AUTO_INCREMENT,
	user_id BIGINT,
	content VARCHAR(255) NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY(user_id) REFERENCES Users(id)
	ON DELETE CASCADE ON UPDATE CASCADE
	) ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS Cards (
	id BIGINT NOT NULL AUTO_INCREMENT,
	user_id BIGINT,
	last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	content TEXT NOT NULL,
	column_id BIGINT,
	PRIMARY KEY(ID),
	FOREIGN KEY(user_id) REFERENCES Users(id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(column_id) REFERENCES Columns(id) ON DELETE CASCADE ON UPDATE CASCADE
	) ENGINE=InnoDB;
	