import './Header.css'; // Imports styles from Header.css file

export default function Header() {
  return (
    <div>
      <header>
        {/* Logo */}
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlkAdZ9kWcLPGqe8_MyyctjPgn0Z2btluUA&usqp=CAU' alt="Logo"></img>
        
        {/* Navigation Menu */}
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Notícia</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
      
      {/* Footer */}
      <footer className='footer'>
        <div className='DivPrinc'>
          {/* Footer Sections */}
          <div className="div1">
            <p><strong>INÍCIO</strong></p>
            <ul className='ul1'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Downloads</a></li>
            </ul>
          </div>

          <div className="div1">
            <p><strong>SOBRE-NÓS</strong></p>
            <ul className='ul1'>
              <li><a href="#">Informações da Empresa</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="div1">
            <p><strong>SUPORTE</strong></p>
            <ul className='ul1'>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Telefones</a></li>
              <li><a href="#">Chat</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="div1">
            <p><strong>SIGA-NOS</strong></p>
            <ul className='ul1'>
              <li ><a href="#"><img src="https://o.remove.bg/downloads/8923aa97-a355-4539-8624-fce70d656d6f/download-removebg-preview.png" alt="WhatsApp" /></a></li>
              <li><a href="#"><img src="https://o.remove.bg/downloads/352cdd11-b53d-4d9a-a45d-409885eafa78/download-removebg-preview.png" alt="Instagram" /></a></li>
              <li><a href="#"><img src="https://o.remove.bg/downloads/92837d23-bc4d-47b1-beed-ec9529374ec5/download-removebg-preview.png" alt="Facebook" /></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
