package com.satya.app.data.repository;

import com.google.gson.Gson;
import com.satya.app.data.local.ChatDao;
import com.satya.app.data.local.MessageEntity;
import com.satya.app.data.local.SessionEntity;
import com.satya.app.data.remote.ChatRequest;
import com.satya.app.data.remote.MessageDto;
import com.satya.app.data.remote.OpenRouterApi;
import com.satya.app.data.remote.ChatResponse;
import kotlinx.coroutines.Dispatchers;
import kotlinx.coroutines.flow.*;
import javax.inject.Inject;
import javax.inject.Singleton;

@javax.inject.Singleton()
@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0007\u0018\u00002\u00020\u0001B\u001f\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u00a2\u0006\u0002\u0010\bJ\u001e\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\fH\u0086@\u00a2\u0006\u0002\u0010\u000eJ\u0016\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0086@\u00a2\u0006\u0002\u0010\u0013J\u0012\u0010\u0014\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00120\u00160\u0015J\u001a\u0010\u0017\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00180\u00160\u00152\u0006\u0010\u0019\u001a\u00020\nJ:\u0010\u001a\u001a\u00020\u00102\u0006\u0010\u0019\u001a\u00020\n2\u0006\u0010\u001b\u001a\u00020\f2\u0006\u0010\u001c\u001a\u00020\f2\u0006\u0010\u001d\u001a\u00020\u001e2\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\fH\u0086@\u00a2\u0006\u0002\u0010 J:\u0010!\u001a\b\u0012\u0004\u0012\u00020\f0\u00152\u0006\u0010\"\u001a\u00020\f2\u0006\u0010#\u001a\u00020\f2\f\u0010$\u001a\b\u0012\u0004\u0012\u00020%0\u00162\u0006\u0010\u0019\u001a\u00020\n2\u0006\u0010\u001d\u001a\u00020\u001eJ.\u0010&\u001a\u00020\u00102\u0006\u0010\u0019\u001a\u00020\n2\f\u0010\'\u001a\b\u0012\u0004\u0012\u00020\f0\u00162\b\u0010(\u001a\u0004\u0018\u00010\fH\u0086@\u00a2\u0006\u0002\u0010)R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006*"}, d2 = {"Lcom/satya/app/data/repository/ChatRepository;", "", "api", "Lcom/satya/app/data/remote/OpenRouterApi;", "dao", "Lcom/satya/app/data/local/ChatDao;", "gson", "Lcom/google/gson/Gson;", "(Lcom/satya/app/data/remote/OpenRouterApi;Lcom/satya/app/data/local/ChatDao;Lcom/google/gson/Gson;)V", "createSession", "", "type", "", "title", "(Ljava/lang/String;Ljava/lang/String;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "deleteSession", "", "session", "Lcom/satya/app/data/local/SessionEntity;", "(Lcom/satya/app/data/local/SessionEntity;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "getAllSessions", "Lkotlinx/coroutines/flow/Flow;", "", "getMessagesForSession", "Lcom/satya/app/data/local/MessageEntity;", "sessionId", "saveMessage", "role", "content", "round", "", "name", "(JLjava/lang/String;Ljava/lang/String;ILjava/lang/String;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "streamChatCompletion", "apiKey", "model", "messages", "Lcom/satya/app/data/remote/MessageDto;", "updateSessionMeta", "tags", "notes", "(JLjava/util/List;Ljava/lang/String;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "app_debug"})
public final class ChatRepository {
    @org.jetbrains.annotations.NotNull()
    private final com.satya.app.data.remote.OpenRouterApi api = null;
    @org.jetbrains.annotations.NotNull()
    private final com.satya.app.data.local.ChatDao dao = null;
    @org.jetbrains.annotations.NotNull()
    private final com.google.gson.Gson gson = null;
    
    @javax.inject.Inject()
    public ChatRepository(@org.jetbrains.annotations.NotNull()
    com.satya.app.data.remote.OpenRouterApi api, @org.jetbrains.annotations.NotNull()
    com.satya.app.data.local.ChatDao dao, @org.jetbrains.annotations.NotNull()
    com.google.gson.Gson gson) {
        super();
    }
    
    @org.jetbrains.annotations.NotNull()
    public final kotlinx.coroutines.flow.Flow<java.util.List<com.satya.app.data.local.SessionEntity>> getAllSessions() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final kotlinx.coroutines.flow.Flow<java.util.List<com.satya.app.data.local.MessageEntity>> getMessagesForSession(long sessionId) {
        return null;
    }
    
    @org.jetbrains.annotations.Nullable()
    public final java.lang.Object createSession(@org.jetbrains.annotations.NotNull()
    java.lang.String type, @org.jetbrains.annotations.NotNull()
    java.lang.String title, @org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super java.lang.Long> $completion) {
        return null;
    }
    
    @org.jetbrains.annotations.Nullable()
    public final java.lang.Object saveMessage(long sessionId, @org.jetbrains.annotations.NotNull()
    java.lang.String role, @org.jetbrains.annotations.NotNull()
    java.lang.String content, int round, @org.jetbrains.annotations.Nullable()
    java.lang.String name, @org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super kotlin.Unit> $completion) {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final kotlinx.coroutines.flow.Flow<java.lang.String> streamChatCompletion(@org.jetbrains.annotations.NotNull()
    java.lang.String apiKey, @org.jetbrains.annotations.NotNull()
    java.lang.String model, @org.jetbrains.annotations.NotNull()
    java.util.List<com.satya.app.data.remote.MessageDto> messages, long sessionId, int round) {
        return null;
    }
    
    @org.jetbrains.annotations.Nullable()
    public final java.lang.Object updateSessionMeta(long sessionId, @org.jetbrains.annotations.NotNull()
    java.util.List<java.lang.String> tags, @org.jetbrains.annotations.Nullable()
    java.lang.String notes, @org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super kotlin.Unit> $completion) {
        return null;
    }
    
    @org.jetbrains.annotations.Nullable()
    public final java.lang.Object deleteSession(@org.jetbrains.annotations.NotNull()
    com.satya.app.data.local.SessionEntity session, @org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super kotlin.Unit> $completion) {
        return null;
    }
}