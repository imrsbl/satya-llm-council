package com.satya.app.data.local;

import androidx.room.*;
import kotlinx.coroutines.flow.Flow;

@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\b\n\u0002\u0010\u000e\n\u0002\b\u0002\bg\u0018\u00002\u00020\u0001J\u0016\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u00a7@\u00a2\u0006\u0002\u0010\u0006J\u0014\u0010\u0007\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00050\t0\bH\'J\u001c\u0010\n\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u000b0\t0\b2\u0006\u0010\f\u001a\u00020\rH\'J\u0018\u0010\u000e\u001a\u0004\u0018\u00010\u00052\u0006\u0010\f\u001a\u00020\rH\u00a7@\u00a2\u0006\u0002\u0010\u000fJ\u0016\u0010\u0010\u001a\u00020\r2\u0006\u0010\u0011\u001a\u00020\u000bH\u00a7@\u00a2\u0006\u0002\u0010\u0012J\u0016\u0010\u0013\u001a\u00020\r2\u0006\u0010\u0004\u001a\u00020\u0005H\u00a7@\u00a2\u0006\u0002\u0010\u0006J\u001c\u0010\u0014\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00050\t0\b2\u0006\u0010\u0015\u001a\u00020\u0016H\'J\u0016\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u00a7@\u00a2\u0006\u0002\u0010\u0006\u00a8\u0006\u0018"}, d2 = {"Lcom/satya/app/data/local/ChatDao;", "", "deleteSession", "", "session", "Lcom/satya/app/data/local/SessionEntity;", "(Lcom/satya/app/data/local/SessionEntity;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "getAllSessions", "Lkotlinx/coroutines/flow/Flow;", "", "getMessagesForSession", "Lcom/satya/app/data/local/MessageEntity;", "sessionId", "", "getSessionById", "(JLkotlin/coroutines/Continuation;)Ljava/lang/Object;", "insertMessage", "message", "(Lcom/satya/app/data/local/MessageEntity;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "insertSession", "searchSessionsByTag", "tag", "", "updateSession", "app_debug"})
@androidx.room.Dao()
public abstract interface ChatDao {
    
    @androidx.room.Insert(onConflict = 1)
    @org.jetbrains.annotations.Nullable()
    public abstract java.lang.Object insertSession(@org.jetbrains.annotations.NotNull()
    com.satya.app.data.local.SessionEntity session, @org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super java.lang.Long> $completion);
    
    @androidx.room.Insert(onConflict = 1)
    @org.jetbrains.annotations.Nullable()
    public abstract java.lang.Object insertMessage(@org.jetbrains.annotations.NotNull()
    com.satya.app.data.local.MessageEntity message, @org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super java.lang.Long> $completion);
    
    @androidx.room.Query(value = "SELECT * FROM sessions ORDER BY timestamp DESC")
    @org.jetbrains.annotations.NotNull()
    public abstract kotlinx.coroutines.flow.Flow<java.util.List<com.satya.app.data.local.SessionEntity>> getAllSessions();
    
    @androidx.room.Query(value = "SELECT * FROM messages WHERE sessionId = :sessionId ORDER BY timestamp ASC")
    @org.jetbrains.annotations.NotNull()
    public abstract kotlinx.coroutines.flow.Flow<java.util.List<com.satya.app.data.local.MessageEntity>> getMessagesForSession(long sessionId);
    
    @androidx.room.Query(value = "SELECT * FROM sessions WHERE id = :sessionId")
    @org.jetbrains.annotations.Nullable()
    public abstract java.lang.Object getSessionById(long sessionId, @org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super com.satya.app.data.local.SessionEntity> $completion);
    
    @androidx.room.Update()
    @org.jetbrains.annotations.Nullable()
    public abstract java.lang.Object updateSession(@org.jetbrains.annotations.NotNull()
    com.satya.app.data.local.SessionEntity session, @org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super kotlin.Unit> $completion);
    
    @androidx.room.Delete()
    @org.jetbrains.annotations.Nullable()
    public abstract java.lang.Object deleteSession(@org.jetbrains.annotations.NotNull()
    com.satya.app.data.local.SessionEntity session, @org.jetbrains.annotations.NotNull()
    kotlin.coroutines.Continuation<? super kotlin.Unit> $completion);
    
    @androidx.room.Query(value = "SELECT * FROM sessions WHERE tags LIKE \'%\' || :tag || \'%\'")
    @org.jetbrains.annotations.NotNull()
    public abstract kotlinx.coroutines.flow.Flow<java.util.List<com.satya.app.data.local.SessionEntity>> searchSessionsByTag(@org.jetbrains.annotations.NotNull()
    java.lang.String tag);
}