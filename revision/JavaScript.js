function about() {
    document.getElementById('all').innerHTML = `<body style="background-size:cover;"><br/><br/><div id="p" style=" margin-top:800px;position:absolute;"><p style="font-size:18px; color:red;">Our history in the Middle East
Origins
HSBC’s presence in the Middle East dates back to 1889 when the bank was known as The Imperial Bank of Persia. The bank changed its name to The Imperial Bank of Iran in 1935; The British Bank of Iran and the Middle East in 1949 and subsequently The British Bank of the Middle East in 1952 when operations in Iran were wound up. The HongKong and Shanghai Banking Corporation Limited acquired The British Bank of the Middle East in 1959.
<br/>
Diversification
The 1940s was a period of great change with the decline of operations in Iran (which closed in 1952) and expansion into the Arabian Peninsula and the Levant.
<br/>
The bank was a leader in financial services in the states that are now referred to as the Gulf Cooperation Council, opening branches in Kuwait (1942), Bahrain (1944), the area now known as the UAE (1946), Oman (Muscat 1948) and Saudi Arabia (Al Khobar and Jeddah 1950).
<br/>
Branches were also opened in the cities of the Fertile Crescent: Beirut (1946), Damascus (1947), Tripoli (1948), Amman (1949) and Aleppo (1951).
<br/>
Regional expansion
By 1959, when the bank was acquired by the Group, it had added more offices in Saudi Arabia, Yemen, Libya, Qatar, Tunisia, Morocco and UAE.
<br/>
During the 1960s and 1970s the bank left Syria, Iraq, South Yemen and Libya after nationalisation of the banking sectors.
<br/>
In 1978, the bank’s business in Saudi Arabia was transferred to a new bank, the Saudi British Bank, where the Group took a 40 per cent share. The Group also took a 40 per cent share in the Hong Kong Egyptian Bank S.A.E, which was established in 1982.
<br/>
Modern structure
In 1994, the bank's head office was transferred to Jersey and in 1999 it was renamed HSBC Bank Middle East (HBME). In 2001 the Group’s shareholding in Egypt increased to 94.5 per cent. In June 2016 the bank confirmed that it had transferred its place of incorporation and head office from Jersey to the Dubai International Financial Centre. As a result of the transfer, HBME is now lead-regulated by the Dubai Financial Services Authority, but remains locally regulated in each of the countries in which it operates by the country’s Central Bank and its other regulators.
<br/>
Making a difference
See how our landmark green bond is being used for vital infrastructure in Egypt.</p>
<br/><br/>
<div style="margin-left:30%;">
        <img src="ceo.jpeg" /><br/>
        Our CEO<br />
        Todd Wilcox,<br /> HSBC Egypt Deputy Chairman and Chief Executive Officer
    </div></div></body>`
}
function contact() {
    document.getElementById('all').innerHTML = `<body style="background-image: url('hsb.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;"><form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
            <label for="validationCustom01" class="form-label">First name</label>
            <input type="text" class="form-control" id="validationCustom01"  required>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Last name</label>
            <input type="text" class="form-control" id="validationCustom02"  required>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">Email</label>
            <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
                <div class="invalid-feedback">
                    Please choose a username.
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationCustom03" class="form-label">Message</label>
            <input type="text" class="form-control" id="validationCustom03" required>
            <div class="invalid-feedback">
                Please provide a valid city.
            </div>
        </div>
        <div class="col-md-3">
            <label for="validationCustom04" class="form-label">State</label>
            <select class="form-select" id="validationCustom04" required>
                <option selected disabled value="">Choose...</option>
                <option>...</option>
            </select>
            <div class="invalid-feedback">
                Please select a valid state.
            </div>
        </div>
        <div class="col-md-3">
            <label for="validationCustom05" class="form-label">Zip</label>
            <input type="text" class="form-control" id="validationCustom05" required>
            <div class="invalid-feedback">
                Please provide a valid zip.
            </div>
        </div>
        <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                    You must agree before submitting.
                </div>
            </div>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
    </form></body>
`
}
function home() {
    document.getElementById('all').innerHTML = ` <body style="background-image: url('hsb.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;">    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" data-bs-interval="4000">
                    <img src="check.jpeg" />
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    <img src="education.jpeg" />
                </div>
                <div class="carousel-item active" data-bs-interval="4000">
                    <img src="member.jpeg" />
                </div>
                <div class="carousel-item " data-bs-interval="4000">
                    <img src="help.jpeg" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
     </body>
`      
}
function log() {
    let e = 'hsbc12345';
    let password = document.getElementById('pass').value;

    if (password == e) {
        document.getElementById('body').innerHTML =` <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <div id="nav">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img src="hsbc.jpeg" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" style="margin-left:80px;">
                            <a class="nav-link active" aria-current="page" href="#" onclick="home()">Home</a>
                        </li>
                        <li class="nav-item" style="margin-left:80px;">
                            <a class="nav-link" href="#" onclick="about()">About Us</a>
                        </li>
                        <li class="nav-item" style="margin-left:80px;">
                            <a class="nav-link" href="#" onclick="contact()">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    
    <div id="all" >
    
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" data-bs-interval="4000">
                    <img src="check.jpeg" />
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    <img src="education.jpeg" />
                </div>
                <div class="carousel-item active" data-bs-interval="4000">
                    <img src="member.jpeg" />
                </div>
                <div class="carousel-item " data-bs-interval="4000">
                    <img src="help.jpeg" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <br /><br />

        
    </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="JavaScript.js"></script>



`
    }
    else {
        document.getElementById('body').innerHTML =`<div class="row">
        <div class="col">
            <input type="email" class="form-control" placeholder="Enter your Email" aria-label="email" >
        </div>
        <div class="col">
            <input type="password" class="form-control" placeholder="Enter your Password" aria-label="password" id="pass" >
        </div>
    </div>
    <button type="button" class="btn btn-secondary btn-lg" onclick="log()">Log in</button>
`
    }
}