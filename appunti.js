var categorie, appunti;
function caricaDaAppuntiJS() {
categorie = {"*":"*","html":"HTML","css":"CSS","js":"JavaScript","javascript":"JavaScript","php":"PHP","sql":"SQL","oop":"OOP","java":"Java","cs":"C#","c#":"C#","git":"Git"}
appunti = {"JavaScript":[[["console","messaggio","debug"],"console.log(stringa1, stringa2, stringaN);"],[["alert","messaggio","debug"],"window.alert(stringa);"]],"PHP":[[["echo","stampa","stringa"],"Stampa una stringa nella pagina in uscita:<br><br>echo('stringa');"],[["autoload","class","spl","register"],"# spl_autoload_register() permette di caricare automaticamente tutte le classi che vengono usate con la sintassi \"new Class()\". Così, non serve specificare ogni volta \"require a; require b; ...\", basta specificare una sola volta \"require '__autoload.php';\" (questo file speciale solitamente viene scritto con due underscore __ all'inizio).<br><br># N.B. Convenzione da rispettare: ciascuna classe deve stare in un singolo file ed il file deve avere lo stesso nome della classe.<br><br>## File: __autoload.php ##<br>&lt;?php<br>spl_autoload_register(function($nome_classe) {<br>&nbsp;&nbsp;&nbsp; // Convenzione: un file per ogni classe, e file con stesso nome della classe<br>&nbsp;&nbsp;&nbsp; $path = $_SERVER['DOCUMENT_ROOT'] . '/class/' . $nome_classe . '.php';<br>&nbsp;&nbsp;&nbsp; require $path;<br>});<br><br>## File: esempio.php ##<br>&lt;?php<br>require '__autoload.php';<br><br>$esempio = new Esempio();<br>$istanza = new ClasseAutomaticamenteInclusa();<br>$unAltro = new NonServeIncludermi();"]],"Git":[[["utilizzo","uso","scopo"],"Git è un CVS (Sistema di Controllo di Versione) che è utile localmente ed in remoto:<br><br>- In locale: permette di avere copie di backup, mentre il lavoro avanza con nuove funzionalità. Quindi offre possibilità di recuperare versioni precedenti ed avere uno storico con tutte le modifiche commentate.<br><br>- In remoto: più sviluppatori possono collaborare e sincronizzare i loro lavori con il deposito in remoto, fondamentalmente ciò avviene tramite una logica a rami, ogni serie di modifiche viene realizzata su un ramo e questo può essere innestato sul progetto principale insieme ad altri rami. Possono coesistere anche dei rami principali dedicati alla versione stabile, di testing e di sviluppo.<br>"],[["installazione","download"],"Git è multipiattaforma e può essere scaricato dal sito ufficiale:<br>https://git-scm.com/download<br><br>In linux è disponibile nel software center.<br>"],[["configurazione"],"Ci sono 3 livelli di configurazione: tutti gli utenti (--system), singolo utente (--global), singolo progetto (cartella .git del progetto). Il livello più specifico sovrascrive quello più generale.<br><br>L'identità definita da nome ed email va inserita come prima cosa a livello utente:<br><br>git config --global user.name \"Mio nome\"<br>git config --global user.email \"mia@email.it\"<br><br>Per controllare le configurazioni:<br><br>git config --list<br><br>È possibile attivare una cache di breve durata (pochi minuti) per le credenziali, così che in una serie di invii successivi non devono essere specificate ogni volta:<br><br>git config --global credential.helper cache<br><br>Di default Git usa l'editor Vim, probabilmente è preferibile usare nano:<br><br>git config --global core.editor \"nano\"<br><br>È comodo usare delle abbreviazioni per alcuni comandi molto usati, al posto di 'commit', potremo scrivere 'cm'; al posto di 'branch', 'br'; 'checkout', 'co' e 'status', 'st':<br><br>git config --global alias.co checkout<br>git config --global alias.br branch<br>git config --global alias.cm commit<br>git config --global alias.st status"],[["avviare","progetto","nuovo"],"Creare una cartella con il nome del progetto, collocarsi al suo interno e partire con:<br><br>git init<br><br>Se la cartella contiene già dei file sarà possibile inserirli come prima modifica.<br>"],[["clonare","progetto"],"Recuperare l'URL del progetto da clonare (copiare in locale) e usare:<br><br>git clone https://github.com/Autore/Progetto<br><br>Verrà creata una cartella con il nome del progetto, per personalizzare il nome della cartella:<br><br>git clone https://github.com/Autore/Progetto NomeCartella<br>"]]}
}
