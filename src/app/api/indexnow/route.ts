import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const host = "bestspaislamabad.com";
    const key = "bestspaislamabad2026indexnow";
    const keyLocation = `https://${host}/${key}.txt`;

    const defaultUrls = [
      `https://${host}/`,
      `https://${host}/massage-center-islamabad`,
      `https://${host}/spa-islamabad`,
      `https://${host}/spa-bahria-town`,
      `https://${host}/massage-bahria-town`,
      `https://${host}/massage-center-bahria-town-phase-7`,
      `https://${host}/massage-center-rawalpindi`,
      `https://${host}/full-body-massage`,
      `https://${host}/body-massage`,
      `https://${host}/spa-services`,
      `https://${host}/location`,
      `https://${host}/why-choose-us`,
      `https://${host}/about`,
      `https://${host}/services`,
      `https://${host}/contact`,
      `https://${host}/faqs`,
      `https://${host}/blog`,
    ];

    const urlList = Array.isArray(body.urls) && body.urls.length > 0 ? body.urls : defaultUrls;

    const payload = {
      host,
      key,
      keyLocation,
      urlList,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok || response.status === 202,
      status: response.status,
      submittedUrls: urlList.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to submit to IndexNow", details: error?.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "IndexNow endpoint ready. Send a POST request with optional { urls: string[] } to submit to Bing & Yandex.",
  });
}
