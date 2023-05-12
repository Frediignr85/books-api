--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-1.pgdg18.04+1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-1.pgdg18.04+1)

-- Started on 2023-05-11 22:29:21 CST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE books;
--
-- TOC entry 3016 (class 1262 OID 323324)
-- Name: books; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE books WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'es_ES.UTF-8' LC_CTYPE = 'es_ES.UTF-8';


\connect books

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 3017 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 323325)
-- Name: ctl_books; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ctl_books (
    id character varying NOT NULL,
    name character varying(250) NOT NULL,
    active boolean NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    deleted_at timestamp without time zone
);


--
-- TOC entry 3018 (class 0 OID 0)
-- Dependencies: 203
-- Name: TABLE ctl_books; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE public.ctl_books IS 'This table will store the record of all the books in the system.';


--
-- TOC entry 3019 (class 0 OID 0)
-- Dependencies: 203
-- Name: COLUMN ctl_books.id; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.ctl_books.id IS 'Unique id';


--
-- TOC entry 3020 (class 0 OID 0)
-- Dependencies: 203
-- Name: COLUMN ctl_books.name; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.ctl_books.name IS 'book''s name';


--
-- TOC entry 3021 (class 0 OID 0)
-- Dependencies: 203
-- Name: COLUMN ctl_books.active; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.ctl_books.active IS 'This field validates if the record is shown as active or inactive';


--
-- TOC entry 3022 (class 0 OID 0)
-- Dependencies: 203
-- Name: COLUMN ctl_books.created_at; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.ctl_books.created_at IS 'Record creation date and time';


--
-- TOC entry 3023 (class 0 OID 0)
-- Dependencies: 203
-- Name: COLUMN ctl_books.updated_at; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.ctl_books.updated_at IS 'Date and time of last update of the record';


--
-- TOC entry 3024 (class 0 OID 0)
-- Dependencies: 203
-- Name: COLUMN ctl_books.deleted_at; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.ctl_books.deleted_at IS 'Record deletion date and time';


--
-- TOC entry 3010 (class 0 OID 323325)
-- Dependencies: 203
-- Data for Name: ctl_books; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.ctl_books VALUES ('927b055f-5646-4b63-acf1-e9708e4cb2d0', 'The Lord of the rings', true, '2023-05-11 22:19:32.175165', '2023-05-11 22:24:20.288029', NULL);
INSERT INTO public.ctl_books VALUES ('09685b08-b53f-4bae-bf46-990e84d3c14d', 'The Great Gatsby', true, '2023-05-11 22:25:07.012446', '2023-05-11 22:25:07.012446', NULL);
INSERT INTO public.ctl_books VALUES ('62fb8a61-84de-4964-b7bd-c053977c17ea', 'To the Lighthouse', true, '2023-05-11 22:25:18.7513', '2023-05-11 22:25:18.7513', NULL);
INSERT INTO public.ctl_books VALUES ('7730235d-004c-437b-80ae-1f380d24780a', 'Adventures of Huckleberry Finn', true, '2023-05-11 22:25:31.091491', '2023-05-11 22:25:31.091491', NULL);


-- Completed on 2023-05-11 22:29:21 CST

--
-- PostgreSQL database dump complete
--

