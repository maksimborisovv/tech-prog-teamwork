create table users (
    id serial primary key,
    login varchar(256),
    password varchar(256),
    name varchar(256)
);

create table tasks (
    id serial primary key,
    user_id integer references users (id),
    name varchar(256),
    description varchar(256),
    date date,
    status varchar(256),
    work_time integer,
    free_time integer,
    pomodoro integer
);

create table subtasks (
    id serial primary key,
    task_id integer references tasks (id),
    name varchar(256),
    description varchar(256)
);

create table settings (
    id serial primary key,
    user_id integer references users (id),
    default_work_time integer,
    default_free_time integer
);