package com.satya.app.data.remote;

import com.google.gson.annotations.SerializedName;
import okhttp3.ResponseBody;
import retrofit2.Response;
import retrofit2.http.*;

@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\bf\u0018\u00002\u00020\u0001J(\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\b\b\u0001\u0010\u0005\u001a\u00020\u00062\b\b\u0001\u0010\u0007\u001a\u00020\bH\u00a7@\u00a2\u0006\u0002\u0010\tJ(\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u000b0\u00032\b\b\u0001\u0010\u0005\u001a\u00020\u00062\b\b\u0001\u0010\u0007\u001a\u00020\bH\u00a7@\u00a2\u0006\u0002\u0010\t\u00a8\u0006\f"}, d2 = {"Lcom/satya/app/data/remote/OpenRouterApi;", "", "chatCompletion", "Lretrofit2/Response;", "Lcom/satya/app/data/remote/ChatResponse;", "apiKey", "", "request", "Lcom/satya/app/data/remote/ChatRequest;", "(Ljava/lang/String;Lcom/satya/app/data/remote/ChatRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "chatCompletionStream", "Lokhttp3/ResponseBody;", "app_debug"})
public abstract interface OpenRouterApi {
    
    @retrofit2.http.POST(value = "chat/completions")
    @org.jetbrains.annotations.Nullable()
    public abstract java.lang.Object chatCompletion(@retrofit2.http.Header(value = "Authorization")
    @org.jetbrains.annotations.NotNull()
    java.lang.String apiKey, @retrofit2.http.Body()
    @org.jetbrains.annotations.NotNull()
    com.satya.app.data.remote.ChatRequest request, @org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super retrofit2.Response<com.satya.app.data.remote.ChatResponse>> $completion);
    
    @retrofit2.http.POST(value = "chat/completions")
    @retrofit2.http.Streaming()
    @org.jetbrains.annotations.Nullable()
    public abstract java.lang.Object chatCompletionStream(@retrofit2.http.Header(value = "Authorization")
    @org.jetbrains.annotations.NotNull()
    java.lang.String apiKey, @retrofit2.http.Body()
    @org.jetbrains.annotations.NotNull()
    com.satya.app.data.remote.ChatRequest request, @org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super retrofit2.Response<okhttp3.ResponseBody>> $completion);
}