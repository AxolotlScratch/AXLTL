CREATE TABLE public.users (
  "user_id" serial PRIMARY KEY NOT NULL,
/*limit number of characters fir the username*/
  "username" VARCHAR ( 50 ) UNIQUE NOT NULL
);

CREATE TABLE public.posts (
  "post_id" serial PRIMARY KEY NOT NULL,
  "article_url" VARCHAR UNIQUE NOT NULL
);

CREATE TABLE public.post_users (
  "user_id" INT NOT NULL,
  "post_id" INT NOT NULL,
  /*the primary key of the junction table is the primary keys of the 
    tables joined*/
  PRIMARY KEY ("user_id", "post_id"),
  /*used when we want to connect the table by letting the database know where you w
    want to connect
    -foreign tells junction table to go to another table to look for specified key and 
    connect them
    */

  FOREIGN KEY ("post_id")
    REFERENCES posts ("post_id"),
  FOREIGN KEY ("user_id")
    REFERENCES users ("user_id")
);

INSERT INTO public.users (username) VALUES ('angelynn');
INSERT INTO public.users (username) VALUES ('danniworld');
INSERT INTO public.users (username) VALUES ('anne');
INSERT INTO public.users (username) VALUES ('vince');


-- psql postgres://vtmsmmqf:5oWZeXlFtds7fXcJ2CseOt1m5KmfWOSG@fanny.db.elephantsql.com/vtmsmmqf
