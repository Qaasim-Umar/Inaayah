import type { Metadata } from "next";
import { StudentLifePageContent } from "@/app/student-life/page";

export const metadata: Metadata = {
  title: "الحياة الطلابية",
  description: "اكتشف الأندية والرياضة والإنجازات والمرافق والرعاية الطلابية والشراكة مع الأسر في أكاديمية عناية الله الدولية.",
};

export default function ArabicStudentLifePage() {
  return <StudentLifePageContent locale="ar" />;
}
