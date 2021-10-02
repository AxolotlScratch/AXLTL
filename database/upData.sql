CREATE TABLE public.users (
  "user_id" serial PRIMARY KEY NOT NULL,
/*limit number of characters fir the username*/
  "username" VARCHAR ( 50 ) UNIQUE NOT NULL
);

CREATE TABLE public.post (
  "post_id" serial PRIMARY KEY NOT NULL
  "article_url" VARCHAR (400) UNIQUE NOT NULL
);

CREATE TABLE public.post_users (
  "user_id" INT NOT NULL
  "post_id" INT NOT NULL
  /*the primary key of the junction table is the primary keys of the 
    tables joined*/
  PRIMARY KEY ("user_id", "post_id"),
  /*used when we want to connect the table by letting the database know where you w
    want to connect
    -foreign tells junction table to go to another table to look for specified key and 
    connect them
    */
  FOREIGN KEY ("user_id")
    REFERENCES roles ("user_id")
  FOREIGN KEY ("post_id")
    REFERENCES roles ("post_id")
);

INSERT INTO public.users VALUES (1, 'angelynn');
INSERT INTO public.users VALUES (2, 'danniworld');
INSERT INTO public.users VALUES (3, 'anne');
INSERT INTO public.users VALUES (4, 'vince');