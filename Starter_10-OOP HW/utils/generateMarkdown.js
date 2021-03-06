function generateMarkdown(data) {

    return`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=S, initial-scale=1.0">
        <title>Team-Template</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    </head>
    
    <body>
        <main>
            <header class="jumbotron text-center bg-danger text-light ">
                <h1>
                    My Team
                </h1>
            </header>
    
            <div class="row  row-cols-md-3 "style="width: 60rem;">
                <div class="col mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${data.name} - ${data.title}</h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID${data.id}</li>
                                <li class="list-group-item">Email ${data.email}</li>
                                <li class="list-group-item">Office#${data.office}</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
    
                        <div class="card-body">
                            <h5 class="card-title">${data.name2} - ${data.title2}</h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID${data.id2}</li>
                                <li class="list-group-item">Email ${data.email2}</li>
                                <li class="list-group-item">Github/${data.github}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
    
                        <div class="card-body">
                            <h5 class="card-title">${data.name1} - ${data.title1}</h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID${data.id1}</li>
                                <li class="list-group-item">Email ${data.email1}</li>
                                <li class="list-group-item">School-${data.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
    
                        <div class="card-body">
                            <h5 class="card-title">TBD - TBD</h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">TBD</li>
                                <li class="list-group-item">TBD</li>
                                <li class="list-group-item">TBD</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">
    
                        <div class="card-body">
                            <h5 class="card-title">TBD</h5>
                            <p class="card-text"></p>
                        </div>
                        <div class="card" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">TBD</li>
                                <li class="list-group-item">TBD</li>
                                <li class="list-group-item">TBD</li>
                            </ul>
                        </div>
                    </div>
                </div>
    
    
        </main>
    
    </body>
    
    </html>`
}

module.exports = generateMarkdown;