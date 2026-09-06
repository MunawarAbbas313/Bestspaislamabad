import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall, MessageCircle, Clock, MapPin, ShieldCheck, Award, Star, CheckCircle2, ArrowLeft, Sparkles, HeartHandshake } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
  title: "مساج سینٹر بحریہ ٹاؤن راولپنڈی | فل باڈی مساج اور سپا سروسز | Best Spa",
  description:
    "بحریہ ٹاؤن فیز 7 راولپنڈی میں سرٹیفائیڈ فل باڈی مساج، سویڈش مساج اور ڈیپ ٹشو تھراپی۔ میڈیکل گریڈ صفائی، پرائیویٹ کمرے، دیر رات 4:40 تک اور ہفتہ اتوار 24 گھنٹے اوپن۔ واٹس ایپ پر رابطہ کریں۔",
  alternates: {
    canonical: "https://bestspaislamabad.com/massage-in-urdu",
  },
  openGraph: {
    title: "مساج سینٹر بحریہ ٹاؤن راولپنڈی | باڈی مساج اور سپا سروسز",
    description: "راولپنڈی اور بحریہ ٹاؤن کا بہترین مساج سینٹر۔ سرٹیفائیڈ عملہ، مکمل پرائیویسی اور شفاف ریٹس۔ فوری رابطہ 03700802980",
    url: "https://bestspaislamabad.com/massage-in-urdu",
    locale: "ur_PK",
  },
};

const urduFaqs = [
  {
    question: "مساج سینٹر کی صحیح لوکیشن کیا ہے؟",
    answer:
      "ہمارا سینٹر بحریہ ٹاؤن فیز 7، نزد نندوز اور ولایت کمپلیکس، راولپنڈی میں واقع ہے۔ یہ فیز 1 تا 8، ڈی ایچ اے، اور جی ٹی روڈ سے باآسانی 5 تا 10 منٹ کی ڈرائیو پر ہے۔",
  },
  {
    question: "سینٹر کے کھلنے اور بند ہونے کے اوقات کیا ہیں؟",
    answer:
      "ہم پیر تا جمعہ صبح 10:00 بجے سے دیر رات 4:40 بجے تک کھلے ہیں، اور ہفتہ اور اتوار کے دن 24 گھنٹے مسلسل سروس فراہم کرتے ہیں۔",
  },
  {
    question: "کیا بکنگ کے بغیر آیا جا سکتا ہے؟",
    answer:
      "واک ان کلائنٹس کا خیرمقدم ہے، لیکن اپنا پسندیدہ وقت اور کمرہ کنفرم کرنے کے لیے واٹس ایپ (+92 370 0802980) پر 10 منٹ قبل میسج یا کال کرنا بہتر ہے۔",
  },
  {
    question: "کیا میل اور فی میل تھراپسٹس دستیاب ہیں؟",
    answer:
      "جی ہاں، ہمارے پاس مستند اور سرٹیفائیڈ میل اور فی میل تھراپسٹس موجود ہیں۔ آپ بکنگ کے وقت اپنی ترجیح بتا سکتے ہیں۔",
  },
  {
    question: "مساج کے ریٹس کیا ہیں؟",
    answer:
      "ہمارے ریٹس انتہائی شفاف ہیں: فل باڈی سویڈش مساج 5,000 روپے، ڈیپ ٹشو مساج 6,000 روپے، اور کپلز سویٹ 12,000 روپے سے شروع ہوتے ہیں۔",
  },
];

const urduServices = [
  {
    title: "فل باڈی سویڈش مساج",
    sub: "Full Body Swedish Massage",
    duration: "60 منٹ",
    price: "5,000 روپے",
    desc: "پورے جسم کے پٹھوں کا سکون، تھکن کا خاتمہ اور خون کی گردش میں بہتری کے لیے بہترین مساج۔ قدرتی ہربل آئلز کے ساتھ۔",
    tag: "سب سے مقبول",
  },
  {
    title: "ڈیپ ٹشو مساج تھراپی",
    sub: "Deep Tissue Therapy",
    duration: "75 منٹ",
    price: "6,000 روپے",
    desc: "کمر درد، گردن کے کھنچاؤ، پٹھوں کی سختی اور دیرینہ جسمانی تھکاوٹ دور کرنے کے لیے خاص دباؤ والی تھراپی۔",
    tag: "درد سے نجات",
  },
  {
    title: "تھائی اسٹریچنگ مساج",
    sub: "Traditional Thai Massage",
    duration: "75 منٹ",
    price: "7,000 روپے",
    desc: "روایتی تھائی طریقہ علاج جس میں کھنچاؤ اور ایکیوپریشر کے ذریعے جوڑوں اور پٹھوں کی لچک بحال کی جاتی ہے۔",
    tag: "لچک و توانائی",
  },
  {
    title: "ہاٹ سٹون گرم پتھروں کا مساج",
    sub: "Hot Stone Basalt Therapy",
    duration: "75 منٹ",
    price: "8,000 روپے",
    desc: "قدرتی آتش فشاں گرم پتھروں کی مدد سے پٹھوں کی گہری ریلیکسیشن اور اعصابی تناؤ کا فوری خاتمہ۔",
    tag: "لگژری علاج",
  },
  {
    title: "اروما تھراپی ریلیکسیشن",
    sub: "Organic Aromatherapy",
    duration: "60 منٹ",
    price: "6,500 روپے",
    desc: "لیونڈر اور یوکلپٹس کے خالص خوشبودار قدرتی تیلوں سے ذہنی دباؤ اور بے خوابی کا موثر قدرتی علاج۔",
    tag: "ذہنی سکون",
  },
  {
    title: "کپلز مساج سویٹ پیکج",
    sub: "Couples Massage Suite",
    duration: "90 منٹ",
    price: "12,000 روپے",
    desc: "جوڑوں کے لیے خصوصی پرائیویٹ سویٹ میں بیک وقت مساج، پرامن ماحول اور رومانوی خوشبوؤں کے ساتھ۔",
    tag: "وی آئی پی سویٹ",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bestspaislamabad.com" },
        { "@type": "ListItem", position: 2, name: "مساج سینٹر اردو", item: "https://bestspaislamabad.com/massage-in-urdu" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: urduFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function MassageInUrduPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:py-28 overflow-hidden bg-gradient-to-b from-emerald-950/30 via-background to-background border-b border-border/40 text-right">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300/40">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              <span>بحریہ ٹاؤن فیز 7 راولپنڈی کا بہترین مساج و سپا سینٹر</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-tight text-foreground leading-tight">
              بحریہ ٹاؤن اور راولپنڈی میں پیشہ ورانہ مساج سروسز
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              روزمرہ کی تھکن، کمر درد اور ذہنی دباؤ سے نجات کے لیے بحریہ ٹاؤن فیز 7 میں واقع ہمارا مساج سینٹر آپ کی خدمت کے لیے حاضر ہے۔ سرٹیفائیڈ تھراپسٹس، پرائیویٹ ائیرکنڈیشنڈ رومز، گرم شاور کی سہولت اور میڈیکل گریڈ حفظان صحت۔
            </p>

            {/* Direct Dual Conversion Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/923700802980?text=ہیلو،%20مجھے%20مساج%20کے%20لیے%20اپوائنٹمنٹ%20بک%20کروانی%20ہے۔"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base shadow-xl transition-all active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                <span>واٹس ایپ پر رابطہ کریں</span>
              </a>

              <a
                href="tel:+923700802980"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-sm sm:text-base shadow-lg transition-all active:scale-95"
              >
                <PhoneCall className="h-5 w-5 animate-bounce" />
                <span>ابھی کال کریں: 0370 0802980</span>
              </a>

              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:bg-muted text-foreground font-semibold text-sm transition-all"
              >
                آن لائن فارم بکنگ
              </Link>
            </div>

            {/* Quick Status */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/60 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>پیر تا جمعہ: صبح 10 تا رات 4:40</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>ہفتہ و اتوار: 24 گھنٹے اوپن</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>سرٹیفائیڈ تھراپسٹس</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>نزد ولایت کمپلیکس فیز 7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Menu in Urdu with Direct WhatsApp on Each Card */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-foreground">
              مساج سروسز اور ریٹ لسٹ (شفاف قیمتیں)
            </h2>
            <p className="text-muted-foreground text-sm">
              اپنی پسندیدہ تھراپی کا انتخاب کریں اور بٹن دبا کر فوری واٹس ایپ پر بکنگ حاصل کریں۔
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {urduServices.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl border border-border p-6 flex flex-col justify-between hover:shadow-xl transition-all space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                      {item.tag}
                    </span>
                    <span className="text-xs text-muted-foreground font-semibold">{item.duration}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-playfair text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground font-sans">{item.sub}</p>
                  </div>

                  <div className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-400">
                    {item.price}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-4 border-t border-border flex flex-col gap-2">
                  <a
                    href={`https://wa.me/923700802980?text=${encodeURIComponent(`ہیلو، مجھے ${item.title} (${item.price}) بک کروانا ہے۔`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow transition-all active:scale-95"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>واٹس ایپ پر بک کریں</span>
                  </a>

                  <a
                    href="tel:+923700802980"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-all"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-amber-400" />
                    <span>کال کریں: 0370 0802980</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Urdu */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold font-playfair text-foreground">
              ہمیں دیگر مساج پارلرز پر کیوں ترجیح دی جاتی ہے؟
            </h2>
            <p className="text-muted-foreground text-sm">راولپنڈی اور اسلام آباد کے کلائنٹس کا ہم پر غیر متزلزل اعتماد</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border space-y-3 text-right">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">100% حفظان صحت اور صفائی</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                ہر کلائنٹ کے لیے تازہ دھوئی ہوئی چادریں، سینیٹائزڈ بیڈز، سنگل یوز سلیپرز اور منسلک گرم شاور کی مکمل سہولت۔
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border space-y-3 text-right">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">ماہر اور تربیت یافتہ عملہ</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                ہمارے تھراپسٹس جسمانی اناٹومی اور اعصابی نظام کو سمجھتے ہوئے مساج کرتے ہیں جس سے حقیقی پٹھوں کو آرام ملتا ہے۔
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border space-y-3 text-right">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">آسان رسائی اور محفوظ پارکنگ</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                بحریہ ٹاؤن فیز 7 کی مین کمرشل بلیوارڈ پر واقع، جہاں گاڑیوں کے لیے 24 گھنٹے سیکیورٹی والی کشادہ پارکنگ دستیاب ہے۔
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urdu FAQs */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-bold font-playfair">اکثر پوچھے جانے والے سوالات (FAQs)</h2>
            <p className="text-muted-foreground text-sm">مساج سیشن اور بکنگ سے متعلق اہم معلومات</p>
          </div>
          <FAQSection faqs={urduFaqs} />
        </div>
      </section>

      <SEOKeywords />
    </div>
  );
}
