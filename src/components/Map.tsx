"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function ServiceMap() {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || mapRef.current) return;

    const lat = 39.7392;
    const lng = -104.9903;

    const map = L.map("service-map", {
      center: [lat, lng],
      zoom: 8,
      scrollWheelZoom: false,
    });
    mapRef.current = map;

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; CARTO",
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);

    const circle = L.circle([lat, lng], {
      radius: 60 * 1609.34,
      color: "#22a134",
      weight: 3,
      opacity: 0.8,
      fillColor: "#22a134",
      fillOpacity: 0.1,
      dashArray: "8,6",
    }).addTo(map);

    map.fitBounds(circle.getBounds().pad(0.1));

    const pin = L.divIcon({
      className: "",
      iconSize: [22, 22],
      iconAnchor: [11, 11],
      html: '<div style="width:22px;height:22px;background:linear-gradient(135deg,#22a134,#5ef06e);border-radius:50%;border:3px solid #fff;box-shadow:0 0 16px rgba(34,161,52,.5)"></div>',
    });

    L.marker([lat, lng], { icon: pin })
      .addTo(map)
      .bindPopup(
        '<div style="text-align:center;font-family:Inter,sans-serif"><strong>Joscar Turf</strong><br><span style="color:#666;font-size:12px">Fresh Sod Every Day</span><br><a href="tel:7204358409" style="color:#22a134;font-weight:700">(720) 435-8409</a></div>'
      );

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div id="service-map" />;
}
