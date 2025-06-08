"use client";

import { Send, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          <span className="text-primary">/</span> Contact Me
        </h2>

        <div className="grid gap-8">
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-xl font-medium">Get In Touch</h3>
            <p className="text-muted-foreground mb-4">
              I'm currently open to new opportunities and collaborations. Feel
              free to reach out if you have a question or just want to connect.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:rohitaggarwal376@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    rohitaggarwal376@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 8588 0871 66</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
