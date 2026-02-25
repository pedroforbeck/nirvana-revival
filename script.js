<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NIRVANA: REVIVAL</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Special+Elite&display=swap" rel="stylesheet">

            <link rel="stylesheet" href="style.css">
            </head>
            <body>

            <header id="hero">
                <div class="video-background">
                    <iframe src="https://www.youtube.com/embed/szk9StGhDGg?autoplay=1&mute=1&loop=1&playlist=szk9StGhDGg&controls=0&playsinline=1" title="Nirvana Background" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="overlay"></div>

                <div style="z-index: 10;">
                    <p class="subtitle">Endless, Nameless, Timeless</p>
                    <h1 class="title">NIRVANA : REVIVAL</h1>
                    <p>Come as you are. Experience the analog chaos once again.</p>
                </div>
            </header>

            <div class="container">

                <section class="media-layout">
                    <div class="player-box">
                        <h3>LIVE TEASER</h3>
                        <p style="font-size: 0.8rem; color: var(--cyan); margin-bottom: 15px;">Drain You (Live at The Paramount '91)</p>

                        <audio id="nirvana-audio" src="drainyou.mp3"></audio>
                        <div id="vinyl-btn" class="vinyl" title="Click to Play"></div>
                        <div id="player-status">CLICK TO PLAY</div>
                    </div>

                    <div class="gallery">
                        <h3>TOUR MEMORIES</h3>
                        <div class="gallery-images">
                            <img src="https://imgs.search.brave.com/gOWMVUhi6dRhl-hec5PCf1kn9TDL3kdFwVm5RwOkAoI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yb2xs/aW5nc3RvbmUuY29t/LmJyL3dwLWNvbnRl/bnQvdXBsb2Fkcy9r/dXJ0X2NvYmFpbl9h/X2ZyZW50ZV9kb19u/aXJ2YW5hX2VtX2Nl/bmFfZG9fbXR2X3Vu/cGx1Z2dlZF9mb3Rv/X2RpdnVsZ2FjYW9f/X210di5qcGc" alt="mtv">
                                <img src="https://imgs.search.brave.com/z8sjDTbDUReHsqwlIuxdKuboxfl13wgqPZVGMQOG7SU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2lK/Q2c1eVBvNWdtVmNj/WEhacnFIZ0QuanBn" alt="inuterotour">
                        </div>
                    </div>
                </section>

                <section class="tour-section">
                    <h2>CLINICAL TOUR DATES</h2>
                    <p>Subject to anatomical failure</p>

                    <table>
                        <thead>
                        <tr>
                            <th>DATE</th>
                            <th>CITY</th>
                            <th>VENUE</th>
                            <th>STATUS</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>OCT 14, 2026</td>
                            <td>SEATTLE, WA</td>
                            <td>PARAMOUNT THEATRE</td>
                            <td style="color: var(--blood-red); font-weight: bold;">SOLD OUT</td>
                        </tr>
                        <tr>
                            <td>OCT 18, 2026</td>
                            <td>LOS ANGELES, CA</td>
                            <td>THE FORUM</td>
                            <td>AVAILABLE</td>
                        </tr>
                        <tr>
                            <td>NOV 05, 2026</td>
                            <td>SÃO PAULO, BR</td>
                            <td>ESTÁDIO DO MORUMBI</td>
                            <td>AVAILABLE</td>
                        </tr>
                        </tbody>
                    </table>
                </section>

                <section class="form-wrapper">
                    <h2>SECURE YOUR DOSAGE</h2>
                    <p style="text-align: center; margin-bottom: 30px; color: var(--parchment);">Enter your details for the presale list.</p>

                    <form action="#" method="POST">
                        <div class="input-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Kurt C." required>
                        </div>

                        <div class="input-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="kurt@seattle.wa" required>
                        </div>

                        <div class="input-group">
                            <label>Phone Number</label>
                            <input type="tel" placeholder="(555) 123-4567">
                        </div>

                        <div style="margin-top: 15px; color: var(--parchment);">
                            <label style="cursor: pointer;">
                                <input type="checkbox" required>
                                    Inject me with Tour Updates and exclusive merchandise drops.
                            </label>
                        </div>

                        <button type="submit">JOIN THE RIOT</button>
                    </form>
                </section>

            </div> <footer>
                <h2 style="font-size: 2rem; opacity: 0.3;">NIRVANA</h2>
                <p>© 2026 NIRVANA REVIVAL. ALL RIGHTS RESERVED. NO APOLOGIES. PEDRO FORBECK. COLLEGE PROJECT.</p>
            </footer>

            <script src="script.js"></script>
            </body>
        </html>