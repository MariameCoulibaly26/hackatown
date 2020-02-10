# Hackatown

## Installation
Il suffit de cloner le dépôt localement et dans le dossier racine exécuter ces commandes:
```
npm install -g yarn
yarn install
yarn add global expo-cli
```

## Tester l'application sur son propre téléphone
Il suffit (dans le dossier racine) de lancer la commande suivante pour démarrer la compilation locale
```
yarn start
```
Ensuite suivre les instructions pour accéder à l'app sur son téléphone. En bref:
* Installer __Expo Cli__ sur son téléphone (Android)
* Lire le QRCode affiché dans le terminal (ou dans le navigateur à l'adresse indiquée dans le terminal)


## Développement avec Sublime Text 3 (ST3)

Si vous utilisez Sublime Text 3, vous pouvez vous faciliter la vie en installant le plugin __Babel__ de ST3.
### Installation Babel
Dans ST3, pressez CTRL+SHIFT+P qui fera apparaitre une barre de recherche de commandes. Dans la barre, tapez __package control__ et parmi les options dans la liste déroulante, sélectionnez __Package Control: Install Package__. Après un court instant, une nouvelle barre de recherche apparaît; tapez __Babel__ et sélectionner le résultat correspondant pour l'installer. Surveillez la barre d'état (au bas de votre fenêtre) pour confirmer que l'installation est en cours. Quoi qu'il en soit, à la fin de l'installation, un onglet s'ouvrira automatiquement dans ST3 avec les informations du plugin.

### Configuration Babel
Ouvrez un fichier `.js` du projet. Sous le menu __View__ dans la barre de menu, survolez le sous-menu __Syntax__. Survolez __Open all with current extensions as...__, puis survolez __Babel__ dans le nouveau sous-menu qui s'ouvre et enfin sélectionnez __Javascript (Babel)__.
