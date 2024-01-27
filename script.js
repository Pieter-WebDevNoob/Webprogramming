function showRecipe() {
    var checkBoxSpaghetti = document.getElementById("Spaghetti");
    var checkBoxTomaat = document.getElementById("Tomaat");
    var checkBoxGehakt = document.getElementById("Gehakt");
    var checkboxAardappel = document.getElementById("Aardappel");
    var checkboxRodeKool = document.getElementById("RodeKool");
    var checkBoxSlavink = document.getElementById("Slavink");
    var checkBoxChampignons = document.getElementById("Champignons");
    var checkBoxUi = document.getElementById("Ui");
    var checkBoxPaprika = document.getElementById("Paprika");
    var checkBoxKipfilet = document.getElementById("Kipfilet");
    var checkBoxBroccoli = document.getElementById("Broccoli");
    var checkBoxCourgette = document.getElementById("Courgette");
    var checkBoxKaas = document.getElementById("Kaas");
    var checkBoxEi = document.getElementById("Ei");
    var checkBoxSpinazie = document.getElementById("Spinazie");
    var checkBoxRijst = document.getElementById("Rijst");
    var checkBoxTomatenpuree = document.getElementById("Tomatenpuree");
    var checkBoxWortel = document.getElementById("Wortel");
    var checkBoxKomkommer = document.getElementById("Komkommer");
    var checkBoxZalm = document.getElementById("Zalm");
    var checkBoxPasta = document.getElementById("Pasta");
    var checkBoxOlijven = document.getElementById("Olijven");
    var checkBoxYoghurt = document.getElementById("Yoghurt");
    var checkBoxMosterd = document.getElementById("Mosterd");
    var checkBoxPeterselie = document.getElementById("Peterselie");
    var checkBoxKnoflook = document.getElementById("Knoflook");
    var checkBoxCitroen = document.getElementById("Citroen");
    var checkBoxVis = document.getElementById("Vis");
    var checkBoxSpinazie = document.getElementById("Spinazie");
    var checkBoxPrei = document.getElementById("Prei");
    var checkBoxKruidenboter = document.getElementById("Kruidenboter");
    var checkBoxTomaten = document.getElementById("Tomaten");
    var checkBoxGehaktballen = document.getElementById("Gehaktballen");
    var checkBoxOlijfolie = document.getElementById("Olijfolie");
    var checkBoxRoom = document.getElementById("Room");

    var selectedIngredients = [];

    if (checkBoxSpaghetti.checked) {
        selectedIngredients.push("spaghetti");
    }
    if (checkBoxTomaat.checked) {
        selectedIngredients.push("tomaat");
    }
    if (checkBoxGehakt.checked) {
        selectedIngredients.push("gehakt");
    }
    if (checkboxAardappel.checked) {
        selectedIngredients.push("aardappel");
    }
    if (checkboxRodeKool.checked) {
        selectedIngredients.push("rodekool");
    }
    if (checkBoxSlavink.checked) {
        selectedIngredients.push("slavink");
    }
    if (checkBoxChampignons.checked) {
        selectedIngredients.push("champignons");
    }
    if (checkBoxUi.checked) {
        selectedIngredients.push("ui");
    }
    if (checkBoxPaprika.checked) {
        selectedIngredients.push("paprika");
    }
    if (checkBoxKipfilet.checked) {
        selectedIngredients.push("kipfilet");
    }
    if (checkBoxBroccoli.checked) {
        selectedIngredients.push("broccoli");
    }
    if (checkBoxCourgette.checked) {
        selectedIngredients.push("courgette");
    }
    if (checkBoxKaas.checked) {
        selectedIngredients.push("kaas");
    }
    if (checkBoxEi.checked) {
        selectedIngredients.push("ei");
    }
    if (checkBoxSpinazie.checked) {
        selectedIngredients.push("spinazie");
    }
    if (checkBoxRijst.checked) {
        selectedIngredients.push("rijst");
    }
    if (checkBoxTomatenpuree.checked) {
        selectedIngredients.push("tomatenpuree");
    }
    if (checkBoxWortel.checked) {
        selectedIngredients.push("wortel");
    }
    if (checkBoxKomkommer.checked) {
        selectedIngredients.push("komkommer");
    }
    if (checkBoxZalm.checked) {
        selectedIngredients.push("zalm");
    }
    if (checkBoxPasta.checked) {
        selectedIngredients.push("pasta");
    }
    if (checkBoxOlijven.checked) {
        selectedIngredients.push("olijven");
    }
    if (checkBoxYoghurt.checked) {
        selectedIngredients.push("yoghurt");
    }
    if (checkBoxMosterd.checked) {
        selectedIngredients.push("mosterd");
    }
    if (checkBoxPeterselie.checked) {
        selectedIngredients.push("peterselie");
    }
    if (checkBoxKnoflook.checked) {
        selectedIngredients.push("knoflook");
    }
    if (checkBoxCitroen.checked) {
        selectedIngredients.push("citroen");
    }
    if (checkBoxVis.checked) {
    selectedIngredients.push("vis");
    }
    if (checkBoxSpinazie.checked) {
        selectedIngredients.push("spinazie");
    }
    if (checkBoxPrei.checked) {
        selectedIngredients.push("prei");
    }
    if (checkBoxKruidenboter.checked) {
        selectedIngredients.push("kruidenboter");
    }
    if (checkBoxTomaten.checked) {
        selectedIngredients.push("tomaten");
    }
    if (checkBoxGehaktballen.checked) {
        selectedIngredients.push("gehaktballen");
    }
    if (checkBoxOlijfolie.checked) {
        selectedIngredients.push("olijfolie");
    }
    if (checkBoxRoom.checked) {
        selectedIngredients.push("room");
    }
        

    // Object met recepten voor verschillende combinaties van ingrediënten
    var recipes = {
        "spaghetti,tomaat,gehakt": "Spaghetti Bolognese",
        "aardappel,rodekool,slavink": "AVG",
        "ui,paprika,kipfilet": "Geroerbakte Kip met Groenten",
        "aardappel,champignons,gehakt": "Gevulde Aardappels met Champignons en Gehakt",
        "paprika,ui,kipfilet": "Paprika Kip",
        "rijst,kipfilet,broccoli": "Kipfilet met Rijst en Broccoli",
        "pasta,zalm,tomaat": "Pasta met Zalm en Tomatensaus",
        "spinazie,ei,kaas": "Spinazie omelet met Kaas",
        "wortel,komkommer,yoghurt": "Wortel-Komkommer Salade met Yoghurtdressing",
        "pasta,tomatenpuree,olijven": "Pasta Puttanesca",
        "gehakt,tomaat,ui,knoflook,peterselie": "Gehaktballen met Tomatensaus",
        "courgette,paprika,ei,kaas,bladerdeeg": "Courgette-Paprika Quiche",
        "kipfilet,champignons,ui,rijst,peterselie": "Kippensoep met Champignons en Rijst",
        "zalm,citroen,knoflook,olijfolie": "Ovengebakken Zalm met Citroen-Knoflooksaus",
        "aardappel,wortel,kaas,room": "Aardappel-Wortel Gratin",
        "vis,tomaten": "Vis met Tomatensaus",
        "spinazie,ei,kruidenboter": "Geroerbakte Spinazie met Kruidenboter",
        "pasta,prei,room": "Pasta met Preisaus",
        "aardappel,ui,kruidenboter": "Gekruide Aardappelen met Ui en Kruidenboter",
        "kipfilet,komkommer,yoghurt": "Kip-Komkommer Salade met Yoghurtdressing",
        "pasta,spinazie,room": "Pasta met Spinazie en Room",
        "broccoli,kaas,room": "Broccoli ovenschotel met Kaas en Room",
        "vis,olijfolie,citroen": "Gebakken Vis met Citroen-Olijfoliesaus",
        "tomaten,ui,knoflook,room": "Tomaten-Knoflooksoep met Room"
        
    };

    // Toon de gevonden recepten of een melding als er geen overeenkomst is
    var recipeElement = document.getElementById("recipe");

    if (selectedIngredients.length === 0) {
        recipeElement.innerText = "Voer meer ingrediënten in.";
        recipeElement.style.display = "block";
        return;
    }

    // Zoek alle recepten die minstens één geselecteerd ingrediënt bevatten
    var matchingRecipes = Object.keys(recipes).filter(recipeIngredients => {
        var recipeIngredientList = recipeIngredients.split(",");
        return selectedIngredients.some(ingredient => recipeIngredientList.includes(ingredient.toLowerCase()));
    }).map(recipeIngredients => recipes[recipeIngredients]);

    if (matchingRecipes.length > 0) {
        recipeElement.innerText = "Mogelijke recepten: " + matchingRecipes.join(", ");
    } else {
        recipeElement.innerText = "Geen overeenkomende recepten gevonden.";
    }
    recipeElement.style.display = "block";
}