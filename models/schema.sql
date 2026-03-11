
set search_path to postgres;

create role techs LOGIN password '!@#techs';

CREATE SCHEMA IF NOT EXISTS techs;
create table if not exists techs.techs(
	id bigserial not null PRIMARY KEY,
	title varchar(256),
	rate float
	
)
