const crypto = require("crypto");

exports.handler = async (event, context) => {
    const secretKey = "Apuntes_2024/25"; // Usa la misma clave que en InfinityFree

    const params = new URLSearchParams(event.rawQuery);
    const token = params.get("token");
    const email = params.get("email");
    const expiry = parseInt(params.get("expiry"));

    if (!token || !email || !expiry) {
        return { statusCode: 400, body: "Faltan parámetros en la URL." };
    }

    // Verificar si el token ha expirado
    if (Date.now() / 1000 > expiry) {
        return { statusCode: 403, body: "Token expirado." };
    }

    // Generar el token esperado
    const expectedToken = crypto.createHmac("sha256", secretKey)
        .update(email + expiry)
        .digest("hex");

    if (token !== expectedToken) {
        return { statusCode: 403, body: "Acceso no autorizado. Token inválido." };
    }

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: `<h1>Bienvenido, ${email}</h1><p>Acceso concedido a los apuntes.</p>`,
    };
};
