-- Database: db_postgres

-- DROP DATABASE db_postgres;

CREATE DATABASE db_postgres
WITH
OWNER = postgres
ENCODING = 'UTF8'
LC_COLLATE = 'C'
LC_CTYPE = 'C'
TABLESPACE = pg_default
CONNECTION LIMIT = -1;

-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    id numeric NOT NULL DEFAULT nextval('seq_user_id'::regclass),
    name character(255) COLLATE pg_catalog."default",
    email character(50) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;