
CREATE TABLE articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    update_at INTEGER NOT NULL,
    created_at INTEGER NOT NULL,
    deleted_at INTEGER
);

INSERT OR REPLACE
    INTO articles(
        id,
        title,
        content,
        update_at,
        created_at,
        deleted_at
    )
    VALUES(
        1,
        "example title",
        "example content",
        1620265331565,
        1620265331565,
        null
    ),
    (
        2,
        "example title2",
        "example content2",
        1620265331565,
        1620265331565,
        null
    );
