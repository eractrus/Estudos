import React from "react";

import './Contact.css'

export default () => {
    return (
        <section className="containerContact">
            <hr />

            <h4>Meus contatos:</h4>

            <ul>
                <li>
                    <a title="My github" target="_blank" href="https://github.com/eractrus"><i
                        class="fa-brands fa-github"></i>
                    </a>
                </li>

                <li>
                    <a title="My linkedin" target="_blank"
                        href="https://www.linkedin.com/in/eractrus-de-jud%C3%A1-775393198/"><i
                            class="fa-brands fa-linkedin-in"></i>
                    </a>
                </li>

                <li>
                    <a title="eractrus@gmail.com" href="#"><i class="fa-solid fa-envelope"></i>
                    </a>
                </li>

                <li>
                    <a title="Contato" target="_blank"
                        href="https://wa.me/5521991667819?text=Ol%C3%A1+Eractrus%2C+vim+pelo+seu+portif%C3%ADlo"><i
                            class="fa-brands fa-whatsapp"></i>
                    </a>
                </li>
            </ul>
            <hr />

        </section>
    )
}