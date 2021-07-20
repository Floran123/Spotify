# STRUCTURE  

Pour commencer la strucuture du projets contient 3 dossiers importants : 
- **API**, qui contient les fichiers qui communiquent avec les classes PHP et fait les appels afin de retourner les donnés demandés par le front en JSON.  
- **Classes**, qui contient les fichiers qui décrivent les appels fait a la BDD en mysql.
- **SRC**, c'est la dedans qu'est le front avec React.js, ce sont les 'vues' du projet.

Le **BACK** est constitué de API et  Classes, dans les classes on définit des fonctions qui font le travail de récupération au niveau de la bdd. Tandis que, dans API, c'est ici qu'on appel ces classes et leurs fonctions afin de retourner les donnés demandés.  
Le **FRONT** est constitué principalement du dossier SRC, React.js fonctionne avec des *composants*  c'est ici qu'on récupère les infos du BACK afin de les afficher a l'écran.  

## CRUD
Le CRUD concerne la partie des classes. Create(INSERT INTO par exemple), Read, Update and Delete : c'est l'acronyme dont vient CRUD. C'est une méthode d'organisation du code qui permet d'économisé temps et donc lignes de codes en organisant sont code selon ses quatres(environ) commandes SQL.    
Le principe est qu'une classe parente définissent ces fonctions afin que les enfants puissent en hérité ensuite ce qui évite la répetiton de code. Comme ces fonctions sont très **très** générales toutes table dans notre base de donnés peut les utilisé.  

On crée donc un fichier par table qui hérite de la classe parente qui contient ces fonctions de base. **ATTENTION**, rien n'empeche de faire des fonctions plus spécifiques dans les enfants : ils auront les fonctions de base hérité et leur fonctions spécifiques.  
Ex : dans une classe User (qui est une classe pour la table 'user') ont pourrait vouloir récupérer un utilisateur par son email. C'est spécifique a la table 'user' on auras donc une fonction getByEmail($email) par exemple.  

https://www.ionos.fr/digitalguide/sites-internet/developpement-web/crud-les-operations-de-base-de-donnees-les-plus-importantes/

## API
Une API (Application Programming Interface), est une interface qui facilite l'acces a des informations. Le principe est le suivant, si on veut récupérer des informations sur un user on aurait donc un appel a l'API comme : http://api.exemple/user/1.  
Derrière cette simple requête, il y a bien sur une logique de code qui voudrait que celui-ci vienne, par exemple, faire un appel a la BDD pour récuperer les infos demandés de l'user 1 (ici.).  

C'est donc comme une 'passerelle' qui facilite l'acces au donnés du BACK(bdd ou autre) et permet donc d'échanger avec le FRONT.  
Le retrait d'information n'est pas la seule chose qu'une API peut faire ! Elle peut très bien register un user avec des donnés d'un formulaire en POST. La aussi, une logique s'appliquerait ou on récupererait les donnés du post($_POST en php) puis on insérerait cela dans le BACK(INSERT INTO en SQL).  

Les donnés renvoyé sont souvent du JSON étant donné que ce language est récupérable sur une large partie des languages (JAVA, JS, PHP etc...)  
https://fr.wikipedia.org/wiki/Interface_de_programmation

# REACT

## COMPOSANT 
Comme expliqué légèrement plus haut, React fonctionne en **composant** qui sont des bout de codes (classes ou fonctions) qui retournent **obligatoirement** du JSX (HTML de React.js).  
Un composant peut totalement contenir d'autre composants. Pour les renders(qu'il soit afficher a l'écran) il faut les placer dans un composant qui lui meme est rendu.  

Ce qui donne par exemple =>  
App.js (vue qui est rendu de base dans index.js)  
--Header.js(enfant de App.js)  
--Home.js(enfant de App.js)  
----Form.js(enfant de Home.js)  
----Section.js(enfant de Home.js)  
------Article.js(enfant de Section.js)  
------Article.js(enfant de Section.js)  
------Article.js(enfant de Section.js)  

Dans un composant quand on veut afficher une array, on utilise la fonction **.map()** qui fonctionnent comme un **.forEach()** et qui fait une boucle sur chaque élément du tableau.  
Ensuite on retourne du JSX pour chaque élément du tableau sans oublier de mettre une clé a chaque élément comme le demande React.js (key={i}).  
PS : pour accéder a une variable dans du JSX on utilise les brackets : {} (*ex: <p\>{variable}<\/p>*).

## ROUTES
React.js se base sur le principe de https://en.wikipedia.org/wiki/Single-page_application : 
Il n'y a qu'une seule page HTML et donc pas de redirection du navigateur, tout est fait en 'direct', il n'y a que le DOM qui change (pas le code source, soit le fichier HTML).  

Les routes servent donc a naviguer entres les différentes section de cette SPA(Single Page Application). Elles sont donc définit dans le fichier App.js (qui est de base le seul a etre rendu dans la config React) et permettent donc d'avoir différents affichage en fonctions des routes.  
Les routes en React.js se charactérisent dans l'url (ex http:localhost:3000/home affiche la page home) et peuvent aussi contenir, assez similairement au $_GET en php (?id=1), des 'paramètres'.  
Il faut les définir dans les différentes Routes comme suit /user/**:id**.    

Ici React reconnaîtras le paramètre *id* et on pouras l'utiliser pour les différents composants (vues) avec notamment la fonction **useParams()** qui récupères les différents paramètres de la route.      
https://reactrouter.com/web/guides/quick-start

## USEEFFECT() && USESTATE()
Dans react quand on veut faire des appels HTTP (avec fetch() par exemple), il faut attendre que le DOM soit chargé, similairement a quand on attend que le DOM soit ready dans Jquery ($(document).ready()).  
Pour ça, il existe dans les *Fonctions composants* une fonction qui s'active après que le DOM est chargé une première fois : **useEffect()**.  

On y met donc les fonctions qui vont envoyé des appels a l'API sans oublié le principe d'asynchrone qui permet 'd'attendre' la fin d'éxécution et de réponse d'une fonction. **ASYNC marche de pair avec AWAIT**.   

La réponse qu'on récupère on peut la *set* ensuite grace a la fonction **useState()** qui sert dans une fonction composant comme de getters et setters qu'il y aurait habituellement dans une classe. Ces donnés récupérer peuvent ensuite etre affiché !  

