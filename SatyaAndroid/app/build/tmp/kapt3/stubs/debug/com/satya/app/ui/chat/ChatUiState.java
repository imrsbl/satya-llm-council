package com.satya.app.ui.chat;

import androidx.lifecycle.SavedStateHandle;
import androidx.lifecycle.ViewModel;
import com.satya.app.data.local.MessageEntity;
import com.satya.app.data.local.SessionEntity;
import com.satya.app.data.remote.MessageDto;
import com.satya.app.data.repository.ChatRepository;
import com.satya.app.data.repository.SettingsRepository;
import dagger.hilt.android.lifecycle.HiltViewModel;
import kotlinx.coroutines.flow.*;
import javax.inject.Inject;

@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0013\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001BA\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u000e\b\u0002\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005\u0012\b\b\u0002\u0010\u0007\u001a\u00020\b\u0012\b\b\u0002\u0010\t\u001a\u00020\n\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\n\u00a2\u0006\u0002\u0010\fJ\u000b\u0010\u0015\u001a\u0004\u0018\u00010\u0003H\u00c6\u0003J\u000f\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005H\u00c6\u0003J\t\u0010\u0017\u001a\u00020\bH\u00c6\u0003J\t\u0010\u0018\u001a\u00020\nH\u00c6\u0003J\u000b\u0010\u0019\u001a\u0004\u0018\u00010\nH\u00c6\u0003JE\u0010\u001a\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\u000e\b\u0002\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u00052\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\n2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\nH\u00c6\u0001J\u0013\u0010\u001b\u001a\u00020\b2\b\u0010\u001c\u001a\u0004\u0018\u00010\u0001H\u00d6\u0003J\t\u0010\u001d\u001a\u00020\u001eH\u00d6\u0001J\t\u0010\u001f\u001a\u00020\nH\u00d6\u0001R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\n\u00a2\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0007\u001a\u00020\b\u00a2\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\u000fR\u0017\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005\u00a2\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u00a2\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\t\u001a\u00020\n\u00a2\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u000e\u00a8\u0006 "}, d2 = {"Lcom/satya/app/ui/chat/ChatUiState;", "", "session", "Lcom/satya/app/data/local/SessionEntity;", "messages", "", "Lcom/satya/app/data/local/MessageEntity;", "isLoading", "", "streamingContent", "", "error", "(Lcom/satya/app/data/local/SessionEntity;Ljava/util/List;ZLjava/lang/String;Ljava/lang/String;)V", "getError", "()Ljava/lang/String;", "()Z", "getMessages", "()Ljava/util/List;", "getSession", "()Lcom/satya/app/data/local/SessionEntity;", "getStreamingContent", "component1", "component2", "component3", "component4", "component5", "copy", "equals", "other", "hashCode", "", "toString", "app_debug"})
public final class ChatUiState {
    @org.jetbrains.annotations.Nullable()
    private final com.satya.app.data.local.SessionEntity session = null;
    @org.jetbrains.annotations.NotNull()
    private final java.util.List<com.satya.app.data.local.MessageEntity> messages = null;
    private final boolean isLoading = false;
    @org.jetbrains.annotations.NotNull()
    private final java.lang.String streamingContent = null;
    @org.jetbrains.annotations.Nullable()
    private final java.lang.String error = null;
    
    public ChatUiState(@org.jetbrains.annotations.Nullable()
    com.satya.app.data.local.SessionEntity session, @org.jetbrains.annotations.NotNull()
    java.util.List<com.satya.app.data.local.MessageEntity> messages, boolean isLoading, @org.jetbrains.annotations.NotNull()
    java.lang.String streamingContent, @org.jetbrains.annotations.Nullable()
    java.lang.String error) {
        super();
    }
    
    @org.jetbrains.annotations.Nullable()
    public final com.satya.app.data.local.SessionEntity getSession() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<com.satya.app.data.local.MessageEntity> getMessages() {
        return null;
    }
    
    public final boolean isLoading() {
        return false;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getStreamingContent() {
        return null;
    }
    
    @org.jetbrains.annotations.Nullable()
    public final java.lang.String getError() {
        return null;
    }
    
    public ChatUiState() {
        super();
    }
    
    @org.jetbrains.annotations.Nullable()
    public final com.satya.app.data.local.SessionEntity component1() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.util.List<com.satya.app.data.local.MessageEntity> component2() {
        return null;
    }
    
    public final boolean component3() {
        return false;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String component4() {
        return null;
    }
    
    @org.jetbrains.annotations.Nullable()
    public final java.lang.String component5() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final com.satya.app.ui.chat.ChatUiState copy(@org.jetbrains.annotations.Nullable()
    com.satya.app.data.local.SessionEntity session, @org.jetbrains.annotations.NotNull()
    java.util.List<com.satya.app.data.local.MessageEntity> messages, boolean isLoading, @org.jetbrains.annotations.NotNull()
    java.lang.String streamingContent, @org.jetbrains.annotations.Nullable()
    java.lang.String error) {
        return null;
    }
    
    @java.lang.Override()
    public boolean equals(@org.jetbrains.annotations.Nullable()
    java.lang.Object other) {
        return false;
    }
    
    @java.lang.Override()
    public int hashCode() {
        return 0;
    }
    
    @java.lang.Override()
    @org.jetbrains.annotations.NotNull()
    public java.lang.String toString() {
        return null;
    }
}