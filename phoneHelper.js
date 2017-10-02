// console.log("Phone Helper");
var __phoneNumberRegex = /(^|\D)((?:(?:\+?1[\s\.-]?)?\(?[2-9]\d\d\)?[\s\.-]?)?[2-9]\d{2}[\s\.-]?\d{4})($|\D)/g;
var __commentRegex = /\/\*[\W\w]*\*\//;
var __cssRegex = /[#.][\w -]*\{[\W\w]*\}/;

var us_code = {
  "201": {"State": "NJ", "Time": "E"},
  "202": {"State": "DC", "Time": "E"},
  "203": {"State": "CT", "Time": "E"},
  "204": {"State": "MB", "Time": "C"},
  "205": {"State": "AL", "Time": "C"},
  "206": {"State": "WA", "Time": "P"},
  "207": {"State": "ME", "Time": "E"},
  "208": {"State": "ID", "Time": "M"},
  "209": {"State": "CA", "Time": "P"},
  "210": {"State": "TX", "Time": "C"},
  "212": {"State": "NY", "Time": "E"},
  "213": {"State": "CA", "Time": "P"},
  "214": {"State": "TX", "Time": "C"},
  "215": {"State": "PA", "Time": "E"},
  "216": {"State": "OH", "Time": "E"},
  "217": {"State": "IL", "Time": "C"},
  "218": {"State": "MN", "Time": "C"},
  "219": {"State": "IN", "Time": "E"},
  "224": {"State": "IL", "Time": "C"},
  "225": {"State": "LA", "Time": "C"},
  "228": {"State": "MS", "Time": "C"},
  "229": {"State": "GA", "Time": "E"},
  "231": {"State": "MI", "Time": "E"},
  "234": {"State": "OH", "Time": "E"},
  "239": {"State": "FL", "Time": "E"},
  "240": {"State": "MD", "Time": "E"},
  "248": {"State": "MI", "Time": "E"},
  "250": {"State": "BC", "Time": "P"},
  "251": {"State": "AL", "Time": "C"},
  "252": {"State": "NC", "Time": "E"},
  "253": {"State": "WA", "Time": "P"},
  "254": {"State": "TX", "Time": "C"},
  "256": {"State": "AL", "Time": "C"},
  "260": {"State": "IN", "Time": "E"},
  "262": {"State": "WI", "Time": "C"},
  "267": {"State": "PA", "Time": "E"},
  "270": {"State": "KY", "Time": "E"},
  "276": {"State": "VA", "Time": "E"},
  "281": {"State": "TX", "Time": "C"},
  "301": {"State": "MD", "Time": "E"},
  "302": {"State": "DE", "Time": "E"},
  "303": {"State": "CO", "Time": "M"},
  "304": {"State": "WV", "Time": "E"},
  "305": {"State": "FL", "Time": "E"},
  "306": {"State": "SK", "Time": "M"},
  "307": {"State": "WY", "Time": "M"},
  "308": {"State": "NE", "Time": "C"},
  "309": {"State": "IL", "Time": "C"},
  "310": {"State": "CA", "Time": "P"},
  "312": {"State": "IL", "Time": "C"},
  "313": {"State": "MI", "Time": "E"},
  "314": {"State": "MO", "Time": "C"},
  "315": {"State": "NY", "Time": "E"},
  "316": {"State": "KS", "Time": "C"},
  "317": {"State": "IN", "Time": "E"},
  "318": {"State": "LA", "Time": "C"},
  "319": {"State": "IA", "Time": "C"},
  "320": {"State": "MN", "Time": "C"},
  "321": {"State": "FL", "Time": "E"},
  "323": {"State": "CA", "Time": "P"},
  "330": {"State": "OH", "Time": "E"},
  "334": {"State": "AL", "Time": "C"},
  "336": {"State": "NC", "Time": "E"},
  "337": {"State": "LA", "Time": "C"},
  "339": {"State": "MA", "Time": "E"},
  "347": {"State": "NY", "Time": "E"},
  "351": {"State": "MA", "Time": "E"},
  "352": {"State": "FL", "Time": "E"},
  "360": {"State": "WA", "Time": "P"},
  "361": {"State": "TX", "Time": "C"},
  "386": {"State": "FL", "Time": "E"},
  "401": {"State": "RI", "Time": "E"},
  "402": {"State": "NE", "Time": "C"},
  "403": {"State": "AB", "Time": "M"},
  "404": {"State": "GA", "Time": "E"},
  "405": {"State": "OK", "Time": "C"},
  "406": {"State": "MT", "Time": "M"},
  "407": {"State": "FL", "Time": "E"},
  "408": {"State": "CA", "Time": "P"},
  "409": {"State": "TX", "Time": "C"},
  "410": {"State": "MD", "Time": "E"},
  "412": {"State": "PA", "Time": "E"},
  "413": {"State": "MA", "Time": "E"},
  "414": {"State": "WI", "Time": "C"},
  "415": {"State": "CA", "Time": "P"},
  "416": {"State": "ON", "Time": "E"},
  "417": {"State": "MO", "Time": "C"},
  "418": {"State": "QC", "Time": "E"},
  "419": {"State": "OH", "Time": "E"},
  "423": {"State": "TN", "Time": "C"},
  "425": {"State": "WA", "Time": "P"},
  "434": {"State": "VA", "Time": "E"},
  "435": {"State": "UT", "Time": "M"},
  "437": {"State": "ON", "Time": "E"},
  "440": {"State": "OH", "Time": "E"},
  "443": {"State": "MD", "Time": "E"},
  "445": {"State": "PA", "Time": "E"},
  "450": {"State": "QC", "Time": "E"},
  "469": {"State": "TX", "Time": "C"},
  "470": {"State": "GA", "Time": "E"},
  "475": {"State": "CT", "Time": "E"},
  "478": {"State": "GA", "Time": "E"},
  "479": {"State": "AR", "Time": "C"},
  "480": {"State": "AZ", "Time": "M"},
  "484": {"State": "PA", "Time": "E"},
  "501": {"State": "AR", "Time": "C"},
  "502": {"State": "KY", "Time": "E"},
  "503": {"State": "OR", "Time": "P"},
  "504": {"State": "LA", "Time": "C"},
  "505": {"State": "NM", "Time": "M"},
  "506": {"State": "NB", "Time": "A"},
  "507": {"State": "MN", "Time": "C"},
  "508": {"State": "MA", "Time": "E"},
  "509": {"State": "WA", "Time": "P"},
  "510": {"State": "CA", "Time": "P"},
  "512": {"State": "TX", "Time": "C"},
  "513": {"State": "OH", "Time": "E"},
  "514": {"State": "QC", "Time": "E"},
  "515": {"State": "IA", "Time": "C"},
  "516": {"State": "NY", "Time": "E"},
  "517": {"State": "MI", "Time": "E"},
  "518": {"State": "NY", "Time": "E"},
  "519": {"State": "ON", "Time": "E"},
  "520": {"State": "AZ", "Time": "M"},
  "530": {"State": "CA", "Time": "P"},
  "540": {"State": "VA", "Time": "E"},
  "541": {"State": "OR", "Time": "P"},
  "551": {"State": "NJ", "Time": "E"},
  "559": {"State": "CA", "Time": "P"},
  "561": {"State": "FL", "Time": "E"},
  "562": {"State": "CA", "Time": "P"},
  "563": {"State": "IA", "Time": "C"},
  "567": {"State": "OH", "Time": "E"},
  "570": {"State": "PA", "Time": "E"},
  "571": {"State": "VA", "Time": "E"},
  "573": {"State": "MO", "Time": "C"},
  "574": {"State": "IN", "Time": "E"},
  "575": {"State": "NM", "Time": "M"},
  "580": {"State": "OK", "Time": "C"},
  "585": {"State": "NY", "Time": "E"},
  "586": {"State": "MI", "Time": "E"},
  "601": {"State": "MS", "Time": "C"},
  "602": {"State": "AZ", "Time": "M"},
  "603": {"State": "NH", "Time": "E"},
  "604": {"State": "BC", "Time": "P"},
  "605": {"State": "SD", "Time": "C"},
  "606": {"State": "KY", "Time": "E"},
  "607": {"State": "NY", "Time": "E"},
  "608": {"State": "WI", "Time": "C"},
  "609": {"State": "NJ", "Time": "E"},
  "610": {"State": "PA", "Time": "E"},
  "612": {"State": "MN", "Time": "C"},
  "613": {"State": "ON", "Time": "E"},
  "614": {"State": "OH", "Time": "E"},
  "615": {"State": "TN", "Time": "C"},
  "616": {"State": "MI", "Time": "E"},
  "617": {"State": "MA", "Time": "E"},
  "618": {"State": "IL", "Time": "C"},
  "619": {"State": "CA", "Time": "P"},
  "620": {"State": "KS", "Time": "C"},
  "623": {"State": "AZ", "Time": "M"},
  "626": {"State": "CA", "Time": "P"},
  "630": {"State": "IL", "Time": "C"},
  "631": {"State": "NY", "Time": "E"},
  "636": {"State": "MO", "Time": "C"},
  "641": {"State": "IA", "Time": "C"},
  "646": {"State": "NY", "Time": "E"},
  "647": {"State": "ON", "Time": "E"},
  "650": {"State": "CA", "Time": "P"},
  "651": {"State": "MN", "Time": "C"},
  "660": {"State": "MO", "Time": "C"},
  "661": {"State": "CA", "Time": "P"},
  "662": {"State": "MS", "Time": "C"},
  "678": {"State": "GA", "Time": "E"},
  "682": {"State": "TX", "Time": "C"},
  "701": {"State": "ND", "Time": "C"},
  "702": {"State": "NV", "Time": "P"},
  "703": {"State": "VA", "Time": "E"},
  "704": {"State": "NC", "Time": "E"},
  "705": {"State": "ON", "Time": "E"},
  "706": {"State": "GA", "Time": "E"},
  "707": {"State": "CA", "Time": "P"},
  "708": {"State": "IL", "Time": "C"},
  "709": {"State": "NF", "Time": "A"},
  "712": {"State": "IA", "Time": "C"},
  "713": {"State": "TX", "Time": "C"},
  "714": {"State": "CA", "Time": "P"},
  "715": {"State": "WI", "Time": "C"},
  "716": {"State": "NY", "Time": "E"},
  "717": {"State": "PA", "Time": "E"},
  "718": {"State": "NY", "Time": "E"},
  "719": {"State": "CO", "Time": "M"},
  "720": {"State": "CO", "Time": "M"},
  "724": {"State": "PA", "Time": "E"},
  "727": {"State": "FL", "Time": "E"},
  "731": {"State": "TN", "Time": "C"},
  "732": {"State": "NJ", "Time": "E"},
  "734": {"State": "MI", "Time": "E"},
  "740": {"State": "OH", "Time": "E"},
  "754": {"State": "FL", "Time": "E"},
  "757": {"State": "VA", "Time": "E"},
  "760": {"State": "CA", "Time": "P"},
  "763": {"State": "MN", "Time": "C"},
  "765": {"State": "IN", "Time": "E"},
  "770": {"State": "GA", "Time": "E"},
  "773": {"State": "IL", "Time": "C"},
  "774": {"State": "MA", "Time": "E"},
  "775": {"State": "NV", "Time": "P"},
  "780": {"State": "AB", "Time": "M"},
  "781": {"State": "MA", "Time": "E"},
  "785": {"State": "KS", "Time": "C"},
  "786": {"State": "FL", "Time": "E"},
  "787": {"State": "PR", "Time": "E"},
  "801": {"State": "UT", "Time": "M"},
  "802": {"State": "VT", "Time": "E"},
  "803": {"State": "SC", "Time": "E"},
  "804": {"State": "VA", "Time": "E"},
  "805": {"State": "CA", "Time": "P"},
  "806": {"State": "TX", "Time": "C"},
  "807": {"State": "ON", "Time": "E"},
  "808": {"State": "HI", "Time": "H"},
  "810": {"State": "MI", "Time": "E"},
  "812": {"State": "IN", "Time": "E"},
  "813": {"State": "FL", "Time": "E"},
  "814": {"State": "PA", "Time": "E"},
  "815": {"State": "IL", "Time": "C"},
  "816": {"State": "MO", "Time": "C"},
  "817": {"State": "TX", "Time": "C"},
  "818": {"State": "CA", "Time": "P"},
  "819": {"State": "QC", "Time": "E"},
  "828": {"State": "NC", "Time": "E"},
  "830": {"State": "TX", "Time": "C"},
  "831": {"State": "CA", "Time": "P"},
  "832": {"State": "TX", "Time": "C"},
  "835": {"State": "PA", "Time": "E"},
  "843": {"State": "SC", "Time": "E"},
  "845": {"State": "NY", "Time": "E"},
  "847": {"State": "IL", "Time": "C"},
  "848": {"State": "NJ", "Time": "E"},
  "850": {"State": "FL", "Time": "E"},
  "856": {"State": "NJ", "Time": "E"},
  "857": {"State": "MA", "Time": "E"},
  "858": {"State": "CA", "Time": "P"},
  "859": {"State": "KY", "Time": "E"},
  "860": {"State": "CT", "Time": "E"},
  "862": {"State": "NJ", "Time": "E"},
  "863": {"State": "FL", "Time": "E"},
  "864": {"State": "SC", "Time": "E"},
  "865": {"State": "TN", "Time": "C"},
  "867": {"State": "YT&NT&NU", "Time": "P"},
  "870": {"State": "AR", "Time": "C"},
  "878": {"State": "PA", "Time": "E"},
  "901": {"State": "TN", "Time": "C"},
  "902": {"State": "NS&PE", "Time": "A"},
  "903": {"State": "TX", "Time": "C"},
  "904": {"State": "FL", "Time": "E"},
  "905": {"State": "ON", "Time": "E"},
  "906": {"State": "MI", "Time": "E"},
  "907": {"State": "AK", "Time": "K"},
  "908": {"State": "NJ", "Time": "E"},
  "909": {"State": "CA", "Time": "P"},
  "910": {"State": "NC", "Time": "E"},
  "912": {"State": "GA", "Time": "E"},
  "913": {"State": "KS", "Time": "C"},
  "914": {"State": "NY", "Time": "E"},
  "915": {"State": "TX", "Time": "C"},
  "916": {"State": "CA", "Time": "P"},
  "917": {"State": "NY", "Time": "E"},
  "918": {"State": "OK", "Time": "C"},
  "919": {"State": "NC", "Time": "E"},
  "920": {"State": "WI", "Time": "C"},
  "925": {"State": "CA", "Time": "P"},
  "928": {"State": "AZ", "Time": "M"},
  "931": {"State": "TN", "Time": "C"},
  "936": {"State": "TX", "Time": "C"},
  "937": {"State": "OH", "Time": "E"},
  "940": {"State": "TX", "Time": "C"},
  "941": {"State": "FL", "Time": "E"},
  "949": {"State": "CA", "Time": "P"},
  "952": {"State": "MN", "Time": "C"},
  "954": {"State": "FL", "Time": "E"},
  "956": {"State": "TX", "Time": "C"},
  "959": {"State": "CT", "Time": "E"},
  "970": {"State": "CO", "Time": "M"},
  "971": {"State": "OR", "Time": "P"},
  "972": {"State": "TX", "Time": "C"},
  "973": {"State": "NJ", "Time": "E"},
  "978": {"State": "MA", "Time": "E"},
  "979": {"State": "TX", "Time": "C"},
  "980": {"State": "NC", "Time": "E"},
  "985": {"State": "LA", "Time": "C"},
  "989": {"State": "MI", "Time": "E"}
};

var phoneNumberRegEx = /(?:^|[\s\(])(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?!\.\S|[^\s\)x\.])/
var phoneNumberRegExMatcher = new RegExp(phoneNumberRegEx)

var linkClass = "phone-helper";

linkPhoneNumbers(document.body);
document.body.addEventListener("DOMNodeInserted", OnNodeInserted, false);

function linkPhoneNumbers(node) {
    for (var i = 0; i < node.childNodes.length; ++i) {
        var child = node.childNodes[i];
        if (child.nodeName == "SCRIPT" || child.nodeName == "NOSCRIPT"
                || child.nodeName == "OBJECT" || child.nodeName == "EMBED"
                || child.nodeName == "APPLET" || child.nodeName == "IFRAME") {
            continue;
        }
        if (child.nodeName == "DIV") {
          // console.log("div");
          if (child.hasAttribute("contenteditable")) {
            // console.log("editable div");
            continue;
          }
          // if (child.hasAttribute("data-msg-id")) {
          //   // console.log("data-msg-id div");
          //   continue;
          // }
        }
        if (child.parentElement && (child.parentElement.nodeName == "DIV" &&
          child.parentElement.hasAttribute("contenteditable")) ||
          (child.parentElement.parentElement &&
            child.parentElement.parentElement.nodeName == "DIV" &&
            child.parentElement.parentElement.hasAttribute("contenteditable"))) {
            // console.log("parent contenteditable");
            continue;
        }

        if (child.childNodes.length > 0) {
            linkPhoneNumbers(child);
        } else if (child.nodeType == 3) {
            var phoneNumbers = phoneNumberRegExMatcher.exec(child.nodeValue);
            if (phoneNumbers) {
                var nextChild = child.nextSibling;
                if (nextChild && nextChild.class == linkClass) {
                    continue;
                }

                var phoneNumber = "+1" + (phoneNumbers[1] ? phoneNumbers[1] : phoneNumbers[2]) + phoneNumbers[3] + phoneNumbers[4];
                var formattedPhoneNumber = "(" + (phoneNumbers[1] ? phoneNumbers[1] : phoneNumbers[2]) + ") " + phoneNumbers[3] + "-" + phoneNumbers[4];

                var stripped = phoneNumber.substring(2);

                var title = "";

                //stripped = stripped.replace(/[\.-]+/g,"");
                // console.log("stripped: " + stripped + ", " + stripped.substring(0,3));
                if (stripped.length == 10) {
                  // US number
                  var code = us_code[stripped.substring(0,3)];
                  if (code) {
                    title = "State: " + code.State + " Time: " + code.Time;
                  } else {
                    title = "Unknown";
                  }
                } else {
                  title = "International";
                }

                var image = document.createElement("img");
                image.src = chrome.extension.getURL("icon48.png");
                image.style.width = "1em";
                image.style.height = "1em";

                var link = document.createElement("a");
                link.href = "tel:" + phoneNumber;
                link.title = title;
                link.class = linkClass;
                link.style.marginLeft = "0.25em";
                link.appendChild(image);

                child.splitText(phoneNumbers.index + phoneNumbers[0].length);
                node.insertBefore(link, node.childNodes[++i]);
                return true;
            }
        }
    }
}

var linking = false;

function OnNodeInserted(event) {
    if (linking) return;
    linking = true;
    linkPhoneNumbers(event.target)
    linking = false;
}
