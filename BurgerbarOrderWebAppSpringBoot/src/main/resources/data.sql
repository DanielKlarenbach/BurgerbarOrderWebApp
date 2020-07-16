-- burgers
insert into dish values (1,'Burgery','wołowina, pomidor, sałata lodowa, korniszon, cebula czerwona, ketchup, majonez','Classic'
,22);
insert into dish values (2,'Burgery','wołowina, pomidor, sałata lodowa, korniszon, czerwona cebula, ser cheddar, ketchup, majonez','Cheese'
,23);
insert into dish values (3,'Burgery','wołowina, pomidor, sałata karbowana, korniszon, cebula czerwona, boczek, ser cheddar, ketchup, majonez','Cheese & Bacon'
,24);
insert into dish values (4,'Burgery','wołowina, pomidor, sałata karbowana, korniszon, cebula czerwona, BBQ boczek, ser cheddar, sos bbq, majonez','BBQ'
,28);
insert into dish values (5,'Burgery','wołowina, karmelizowana cebula, korniszon, pomidor, ser cheddar, majonez, sos tennessee','American'
,27);
insert into dish values (6,'Burgery','wołowina, bekon, jajko sadzone, pieczarki, cebula czerwona, sos BBQ, majonez','Hangover Cure'
,25);
insert into dish values (7,'Burgery','wołowina, cebula czerwona, korniszon, burak  pieczony, rukola, sos pieprzowy, majonez','Mr Pepper'
,24);
insert into dish values (8,'Burgery','wołowina, chorizo, jalapeño, rukola, cebula czerwona, pomidor, ketchup,  sos chilli, majonez','Hustla'
,25);
insert into dish values (9,'Burgery','wołowina, szpinak baby, oliwki zielone, pesto z jarmużu, pomidor, cebula czerwona, grillowanyser hallumi, ketchup, majonez','Greek'
,28);
insert into dish values (10,'Burgery','wołowina, chutney z ananasa z chilli, mozzarella, sałata lodowa, pomidor, majonez','Maui'
,24);
insert into dish values (11,'Burgery','wołowina, świeży jarmuż, suszone pomidory, cebula karmelizowana, ser feta, majonez, ketchup','Hipster'
,24);
insert into dish values (12,'Burgery','filet z kurczaka, sałata rzymska, pomidor, cebula czerwona, ogórek, parmezan, bekon, chips z parmezanu, sos Cesare, majonez','Caesar Chicken'
,23);
insert into dish values (13,'Burgery','filet z kurczaka, rukola, ogórek zielony, karmelizowana cebula, chips z parmezanu, majonez, sos musztardowo-miodowy','Honey & Mustard'
,22);
insert into dish values (14,'Burgery','grillowany ser halloumi, szpinak baby, oliwki zielone, pesto z jarmużu, czerwona cebula, ogórek, majonez, ketchup','Halloumi'
,26);
insert into dish values (15,'Burgery','wołowina, masło orzechowe, sałata karbowana, cebula czerwona, pomidor,  ketchup majonez','Peanut'
,24);
insert into dish values (16,'Burgery','soczysta wołowina, guacamole home made, szpinak, cebula, ser topiony cheddar, majonez, Cheetosy sweet chilli','Chester'
,30);

-- salads
insert into dish values (17,'Sałatki','grillowana pierś kurczaka, sałata rzymska, grzanki, parmezan, cezar dressing','Cezar'
,24);
insert into dish values (18,'Sałatki','grillowany ser halloumi, granat, grejpfrut, roszponka, rukola, czerwona cebula, pomidorki cherry, papryka pepperoni, mięta, czosnek, miód','Halloumi'
,25);

-- other
insert into dish values (19,'Dodatki', 'z salsą i serem', 'Nachos', 12);
insert into dish values (20,'Dodatki', ' z sosem aioli ', 'Ziemniaczki', 8);
insert into dish values (21,'Dodatki', 'z sosem BBQ', 'Onion rings', 12);
insert into dish values (22,'Dodatki', 'frytki z bekonem i serem cheddar', 'Cheese & Becon Fries', 12);
insert into dish values (23,'Dodatki', 'z ketchupem', 'Frytki', 12);
insert into dish values (24,'Dodatki', '4 szt', 'Serki panierowane', 12);

-- drinks
insert into dish values (25,'Napoje', '', 'Yerbata klasyczna', 9);
insert into dish values (26,'Napoje', '', 'John Lemon rabarbar', 9);
insert into dish values (27,'Napoje', '', 'Yerbata granat', 9);
insert into dish values (28,'Napoje', '', 'John Lemon porzeczka', 9);
insert into dish values (29,'Napoje', '', 'Woda gazowana', 5);
insert into dish values (30,'Napoje', '', 'Woda niegazowana', 5);
insert into dish values (31,'Napoje', '', 'Domowa Lemoniada', 7);

-- steaks
insert into dish values (32,'Steki', 'w zestawie z frytkami, kukurydzą i sałatką, do wyboru: sos z zielonego pieprzu, BBQ lub masło czosnkowe ', 'Rostbef', 48);
insert into dish values (33,'Steki', 'w zestawie z frytkami, kukurydzą i sałatką, do wyboru: sos z zielonego pieprzu, BBQ lub masło czosnkowe ', 'Antrykot', 52);
insert into dish values (34,'Steki', 'w zestawie z frytkami, kukurydzą i sałatką, do wyboru: sos z zielonego pieprzu, BBQ na bazier whiskey Jameson lub masło czosnkowe', 'Polędwica Wołowa', 65);

-- dips
insert into dish values (35,'Sosy', '', 'Cajun', 2);
insert into dish values (36,'Sosy', '', 'Tennessee', 2);
insert into dish values (37,'Sosy', '', 'Majonez', 2);
insert into dish values (38,'Sosy', '', 'Caesare', 7);
insert into dish values (39,'Sosy', '', 'Pepper', 2);
insert into dish values (40,'Sosy', '', 'BBQ', 2);
insert into dish values (41,'Sosy', '', 'Zielony', 2);
insert into dish values (42,'Sosy', '', 'Honey Mustard', 2);

-- categories
insert into category values (1,'Burgery');
insert into category values (2,'Sałatki');
insert into category values (3,'Steki');
insert into category values (4,'Napoje');
insert into category values (5,'Dodatki');
insert into category values (6,'Sosy');



