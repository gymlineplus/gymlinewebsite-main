"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Navigation,
} from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xkgjyddw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex items-center justify-center p-5">
      <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We would love to hear from you. Fill out the form below or reach
                out directly.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we will get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center space-y-4 py-12">
                    <div className="rounded-full bg-green-100 p-3">
                      <Send className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-medium">Message Sent!</h3>
                    <p className="text-center text-muted-foreground">
                      Thank you for reaching out. We will get back to you
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Reach out to us directly through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        info@gymlineplus.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">
                        +91 9205899041 | <strong>Helpline No</strong> - +91
                        9311771888
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        Okhla Phase II, Industrial Area,
                        <br />
                        New Delhi - 110020
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Saturday: 10:30 AM - 7:30 PM
                        <br />
                        Weekly Off
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>
                    Connect with us on social media.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link
                        href="https://www.facebook.com/GymLine.IN/"
                        target="_blank"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link
                        target="_blank"
                        href="https://www.instagram.com/gymline.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        aria-label="Instagram"
                      >
                        <Instagram className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mx-auto max-w-5xl mt-8">
            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Map Container */}
                  <div className="w-full h-[350px] overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2675237769354!2d77.26938757428917!3d28.531677588655658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce15ab27a9b1d%3A0x7efddf5f49ea9309!2sGymline%20Plus%20Private%20Limited!5e0!3m2!1sen!2sin!4v1745990488969!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="GymLine Plus Location"
                      className="w-full h-full filter grayscale-[50%]"
                    ></iframe>
                  </div>
                  
                  {/* Map Overlay Card */}
                  <div className="absolute top-8 left-8 max-w-[280px] bg-background/95 backdrop-blur-sm p-5 rounded-lg shadow-lg border border-border">
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">Gymline</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Okhla Phase II, Industrial Area, New Delhi - 110020
                      </p>
                      <Button size="sm" className="flex items-center gap-2" asChild>
                        <Link href="https://maps.app.goo.gl/7HDTf9c73AnPmF6f8" target="_blank">
                          <Navigation className="h-4 w-4" />
                          <span>Get Directions</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}