package com.satya.app

import android.os.Bundle
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webview)

        val webSettings = webView.settings
        webSettings.javaScriptEnabled = true
        webSettings.domStorageEnabled = true
        webSettings.loadWithOverviewMode = true
        webSettings.useWideViewPort = true
        webSettings.databaseEnabled = true
        webSettings.allowFileAccess = true
        
        // Improve performance
        webSettings.setRenderPriority(WebSettings.RenderPriority.HIGH)
        webSettings.cacheMode = WebSettings.LOAD_DEFAULT

        webView.webViewClient = WebViewClient()
        webView.webChromeClient = WebChromeClient()

        // Load from GitHub Pages for automatic updates
        webView.loadUrl("https://imrsbl.github.io/satya-llm-council/")
    }

    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
