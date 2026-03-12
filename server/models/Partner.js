import { firestore } from "../firebaseAdmin.js";

const PARTNERS_COLLECTION = "partners";

function normalizePartner(doc) {
  return { id: doc.id, ...doc.data() };
}

export async function createPartner(data) {
  const now = new Date().toISOString();
  const payload = {
    name: data.name,
    phone: data.phone,
    city: data.city,
    companyName: data.companyName || "",
    truckTypes: data.truckTypes || "",
    fleetSize: data.fleetSize || "",
    drivingLicenseNo: data.drivingLicenseNo || "",
    aadharNumber: data.aadharNumber || "",
    createdAt: now
  };

  const docRef = await firestore.collection(PARTNERS_COLLECTION).add(payload);
  return { id: docRef.id, ...payload };
}

export async function listPartners() {
  const snapshot = await firestore.collection(PARTNERS_COLLECTION).get();
  return snapshot.docs.map(normalizePartner);
}
