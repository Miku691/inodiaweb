app.controller("contentController", function ($scope) {
    $scope.localStorageData = '';
    $scope.selectedTableType = 'Personal Details';

    $scope.contentTitleDescViewTxt = '';
    $scope.contentTitleDescObj = {};

    $scope.contentImageAltTxtViewTxt = '';
    $scope.contentImageAltTxtcObj = {};

    $scope.tableTypes = ['Personal Details', 'Family Details', 'Educational Details', 'Physical Stats', 'Social Media Handles', 'Favourite Things'];
    $scope.commonTableObj = {};

    $scope.contentTitleTableViewTxt = '';

    $scope.personalDetailsTableObj = {
        "Full Name": null,
        "Nick Name": null,
        "Date of Birth": null,
        "Date of Death": null,
        "Birth Place": null,
        "Age": 0,
        "Profession": null,
        "Zodiac signs": null,
        "Nationality": null,
        "Blood Group": null,
        "Marital Status": null,
        "First Movie": null,
        "Occupation": null,
        "Signature/ Autograph":null
    };

    $scope.familyDetailsTableObj = {
        "Father Name": null,
        "Mother Name": null,
        "Wife Name": null,
        "Children": null,
        "Siblings": null
    };

    $scope.educationalDetailsTableObj = {
        "School": null,
        "College": null,
        "Qualification": null
    };

    $scope.physicalStateDetailsTableObj = {
        "Height (Aprox)": null,
        "Weight": null,
        "Eye color": null,
        "Hair color":null
    };

    $scope.socialMediaDetailsTableObj = {
        "Instagram": null,
        "IMDB": null,
        "Twitter": null
    };

    $scope.favouriteThingsDetailsTableObj = {
        "Sports": null,
        "Food": null,
        "Film": null,
        "Actor": null,
        "Song": null,
        "Color": null
    };

    const init = () => {
        $scope.selectedTableTypeFunc();

        setTitleDescFromLocalStorgToPage();
        setImageAltTxtFromLocalStorgToPage();
        setTitleTableLDataocalStorgToPage();

        setLocalStorgDataToPage();
    }

    $scope.selectKeyValue = function(key, value){
        $scope.commonTableObj[key] = value;
    }

    //delete table details from local storage
    $scope.removeTitleTableData = function(){
        localStorage.removeItem("favouriteThingsDetailsTableObj");
        localStorage.removeItem("socialMediaDetailsTableObj");
        localStorage.removeItem("physicalStateDetailsTableObj");
        localStorage.removeItem("educationalDetailsTableObj");
        localStorage.removeItem("familyDetailsTableObj");
        localStorage.removeItem("personalDetailsTableObj");
    }

    // switching table in select
    $scope.selectedTableTypeFunc = function(){
        setTitleTableLDataocalStorgToPage();
        $scope.commonTableObj = {};
        if($scope.selectedTableType == $scope.tableTypes[0]){
            $scope.commonTableObj = $scope.personalDetailsTableObj;
        }
        else if($scope.selectedTableType == $scope.tableTypes[1]){
            $scope.commonTableObj = $scope.familyDetailsTableObj;
        }
        else if($scope.selectedTableType == $scope.tableTypes[2]){
            $scope.commonTableObj = $scope.educationalDetailsTableObj;
        }
        else if($scope.selectedTableType == $scope.tableTypes[3]){
            $scope.commonTableObj = $scope.physicalStateDetailsTableObj;
        }
        else if($scope.selectedTableType == $scope.tableTypes[4]){
            $scope.commonTableObj = $scope.socialMediaDetailsTableObj;
        }
        else if($scope.selectedTableType == $scope.tableTypes[5]){
            $scope.commonTableObj = $scope.favouriteThingsDetailsTableObj;
        }
    }

    $scope.addTitleDescData = function (extractType) {
        $scope.contentTitleDescObj.title = $scope.h2TitleTxt;
        $scope.contentTitleDescObj.desc = $scope.titleDesc;
        localStorage.setItem('titleDesctiption', JSON.stringify($scope.contentTitleDescObj));
        setTitleDescFromLocalStorgToPage();
        if(extractType == 'alone')
            $scope.localStorageData = $scope.contentTitleDescViewTxt;
        else
            setLocalStorgDataToPage();
    }

    $scope.addImageAltTxtData = function (extractType) {
        $scope.contentImageAltTxtcObj.image = $scope.imageURL;
        $scope.contentImageAltTxtcObj.alttxt = $scope.imageAltTxt;
        localStorage.setItem('imageAltTxt', JSON.stringify($scope.contentImageAltTxtcObj));
        setImageAltTxtFromLocalStorgToPage();
        if(extractType == 'alone')
            $scope.localStorageData = $scope.contentImageAltTxtViewTxt;
        else
            setLocalStorgDataToPage();
    }

    $scope.addTitleTableData = function (extractType) {
        if($scope.selectedTableType == $scope.tableTypes[0])
            localStorage.setItem('personalDetailsTableObj', JSON.stringify($scope.commonTableObj));
        else if($scope.selectedTableType == $scope.tableTypes[1])
            localStorage.setItem('familyDetailsTableObj', JSON.stringify($scope.commonTableObj));
        else if($scope.selectedTableType == $scope.tableTypes[2])
            localStorage.setItem('educationalDetailsTableObj', JSON.stringify($scope.commonTableObj));
        else if($scope.selectedTableType == $scope.tableTypes[3])
            localStorage.setItem('physicalStateDetailsTableObj', JSON.stringify($scope.commonTableObj));
        else if($scope.selectedTableType == $scope.tableTypes[4])
            localStorage.setItem('socialMediaDetailsTableObj', JSON.stringify($scope.commonTableObj));
        else if($scope.selectedTableType == $scope.tableTypes[5])
            localStorage.setItem('favouriteThingsDetailsTableObj', JSON.stringify($scope.commonTableObj));


        setTitleTableLDataocalStorgToPage();
        if(extractType == 'alone')
            $scope.localStorageData = $scope.contentTitleTableViewTxt;
        else
            setLocalStorgDataToPage();
    }

    //fetchig title and desc from local storage
    const setTitleDescFromLocalStorgToPage = () => {
        $scope.contentTitleDescStr = localStorage.getItem('titleDesctiption');
        if ($scope.contentTitleDescStr) {
            $scope.contentTitleDescObj = JSON.parse($scope.contentTitleDescStr);
            $scope.h2TitleTxt = $scope.contentTitleDescObj.title;
            $scope.titleDesc = $scope.contentTitleDescObj.desc;

            $scope.contentTitleDescViewTxt = '<h2>' + $scope.h2TitleTxt + '</h2>' + '<p>' + $scope.titleDesc + '</p>';
        }
    }

    //fetchig image url and alt text from local storage
    const setImageAltTxtFromLocalStorgToPage = () => {
        $scope.contentImageAltTxtStr = localStorage.getItem('imageAltTxt');
        if ($scope.contentImageAltTxtStr) {
            $scope.contentImageAltTxtcObj = JSON.parse($scope.contentImageAltTxtStr);
            $scope.imageURL = $scope.contentImageAltTxtcObj.image;
            $scope.imageAltTxt = $scope.contentImageAltTxtcObj.alttxt;

            $scope.contentImageAltTxtViewTxt = '<div style="text-align: center;"><img alt="' + $scope.imageAltTxt + '" border="0" src="' + $scope.imageURL + '"></div>';
        }
    }

    const setTitleTableLDataocalStorgToPage = () => {
        if($scope.selectedTableType == $scope.tableTypes[0]){
            $scope.contentTitleTableTxtStr = localStorage.getItem('personalDetailsTableObj');
        }
        else if($scope.selectedTableType == $scope.tableTypes[1]){
            $scope.contentTitleTableTxtStr = localStorage.getItem('familyDetailsTableObj');
        }
        else if($scope.selectedTableType == $scope.tableTypes[2]){
            $scope.contentTitleTableTxtStr = localStorage.getItem('educationalDetailsTableObj');
        }
        else if($scope.selectedTableType == $scope.tableTypes[3]){
            $scope.contentTitleTableTxtStr = localStorage.getItem('physicalStateDetailsTableObj');
        }
        else if($scope.selectedTableType == $scope.tableTypes[4]){
            $scope.contentTitleTableTxtStr = localStorage.getItem('socialMediaDetailsTableObj');
        }
        else if($scope.selectedTableType == $scope.tableTypes[5]){
            $scope.contentTitleTableTxtStr = localStorage.getItem('favouriteThingsDetailsTableObj');
        }

        //$scope.contentTitleTableTxtStr = localStorage.getItem('commonDataTableObj');
        if ($scope.contentTitleTableTxtStr) {
            $scope.commonTableObj = JSON.parse($scope.contentTitleTableTxtStr);
            if($scope.selectedTableType == $scope.tableTypes[0])
                $scope.personalDetailsTableObj = $scope.commonTableObj;
            else if($scope.selectedTableType == $scope.tableTypes[1])
                $scope.familyDetailsTableObj = $scope.commonTableObj;
            else if($scope.selectedTableType == $scope.tableTypes[2])
                $scope.educationalDetailsTableObj = $scope.commonTableObj;
            else if($scope.selectedTableType == $scope.tableTypes[3])
                $scope.physicalStateDetailsTableObj = $scope.commonTableObj;
            else if($scope.selectedTableType == $scope.tableTypes[4])
                $scope.socialMediaDetailsTableObj = $scope.commonTableObj;
            else if($scope.selectedTableType == $scope.tableTypes[5])
                $scope.favouriteThingsDetailsTableObj = $scope.commonTableObj;

            $scope.contentTitleTableViewTxt = '<h2 class="h2HrStyle">'+ $scope.selectedTableType + '</h2>' + $scope.convertTableHtmlFromObj($scope.commonTableObj);
        }
    }

    //function to convert html table from json object
    $scope.convertTableHtmlFromObj = function(obj){
        $scope.htmlTableData = '<div class="table"><table>';
        angular.forEach(obj, function (value, key) { 
            $scope.htmlTableData += '<tr><td>' + key + '</td><td>' + value + '</td></tr>';
        });
        $scope.htmlTableData += '</table></div>';
        
        return $scope.htmlTableData;
    }


    //add all local storage data to view
    const setLocalStorgDataToPage = () => {
        $scope.localStorageData = $scope.contentTitleDescViewTxt + $scope.contentImageAltTxtViewTxt + $scope.contentTitleTableViewTxt;
    }

    //remove the key from object
    $scope.removeObjKey = function(objKey){
        const isDeletble =  confirm('Do you want to remove- ' + objKey + ' ?');
        if(isDeletble)
            delete($scope.commonTableObj[objKey]);
    }

    init();
});