-- DROP DATABASE IF EXISTS ascendra;
-- CREATE DATABASE IF NOT EXISTS ascendra;
CREATE TYPE Status AS ENUM ('BACKLOG', 'TODO', 'WORK_IN_PROGRESS', 'TEST', 'DONE');
CREATE TABLE IF NOT EXISTS goals
(
    id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name        VARCHAR(255),
    description VARCHAR(255),
    start_date  DATE,
    end_date    DATE,
    status      Status
);

CREATE TABLE IF NOT EXISTS milestones
(
    id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name        VARCHAR(255),
    description VARCHAR(255),
    start_date  DATE,
    end_date    DATE,
    status      Status
);

CREATE TABLE IF NOT EXISTS tasks
(
    id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name        VARCHAR(255),
    description VARCHAR(255),
    start_date  DATE,
    end_date    DATE,
    status      Status
);

CREATE TABLE IF NOT EXISTS goal_milestones
(
    goal_id      INT,
    milestone_id INT,
    CONSTRAINT FK_goal_milestone_goal FOREIGN KEY (goal_id) REFERENCES goals (id) ON DELETE CASCADE,
    CONSTRAINT FK_goal_milestone_milestone FOREIGN KEY (milestone_id) REFERENCES milestones (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS milestone_tasks
(
    milestone_id INT,
    task_id      INT,
    CONSTRAINT FK_milestone_tasks_milestone FOREIGN KEY (milestone_id) REFERENCES milestones (id) ON DELETE CASCADE,
    CONSTRAINT FK_milestone_tasks_task FOREIGN KEY (task_id) REFERENCES tasks (id) ON DELETE CASCADE
);