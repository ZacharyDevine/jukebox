-- TODO
drop table if exists playlists_tracks;
drop table if exists tracks;
drop table if exists playlist;

create table playlist (
  id serial primary key,
  name text not null,
  description text not null
);

create table tracks (
  id serial primary key,
  name text not null,
  duration_ms integer not null
);

create table playlists_tracks (
  id serial primary key,
  playlist_id integer not null references playlist (id) on delete cascade,
  track_id integer not null references tracks (id) on delete cascade,
  unique (playlist_id, track_id)
);