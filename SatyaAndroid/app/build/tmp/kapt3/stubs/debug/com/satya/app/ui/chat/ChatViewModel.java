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

@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u001f\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u00a2\u0006\u0002\u0010\bJ\b\u0010\u0012\u001a\u00020\u0013H\u0002J\b\u0010\u0014\u001a\u00020\u0013H\u0002J\u0018\u0010\u0015\u001a\u00020\u00132\u0006\u0010\u0016\u001a\u00020\u00172\b\b\u0002\u0010\u0018\u001a\u00020\u0017R\u0014\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\nX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0017\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u000b0\u000f\u00a2\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011\u00a8\u0006\u0019"}, d2 = {"Lcom/satya/app/ui/chat/ChatViewModel;", "Landroidx/lifecycle/ViewModel;", "repository", "Lcom/satya/app/data/repository/ChatRepository;", "settingsRepository", "Lcom/satya/app/data/repository/SettingsRepository;", "savedStateHandle", "Landroidx/lifecycle/SavedStateHandle;", "(Lcom/satya/app/data/repository/ChatRepository;Lcom/satya/app/data/repository/SettingsRepository;Landroidx/lifecycle/SavedStateHandle;)V", "_uiState", "Lkotlinx/coroutines/flow/MutableStateFlow;", "Lcom/satya/app/ui/chat/ChatUiState;", "sessionId", "", "uiState", "Lkotlinx/coroutines/flow/StateFlow;", "getUiState", "()Lkotlinx/coroutines/flow/StateFlow;", "loadMessages", "", "loadSession", "sendMessage", "content", "", "model", "app_debug"})
@dagger.hilt.android.lifecycle.HiltViewModel()
public final class ChatViewModel extends androidx.lifecycle.ViewModel {
    @org.jetbrains.annotations.NotNull()
    private final com.satya.app.data.repository.ChatRepository repository = null;
    @org.jetbrains.annotations.NotNull()
    private final com.satya.app.data.repository.SettingsRepository settingsRepository = null;
    private final long sessionId = 0L;
    @org.jetbrains.annotations.NotNull()
    private final kotlinx.coroutines.flow.MutableStateFlow<com.satya.app.ui.chat.ChatUiState> _uiState = null;
    @org.jetbrains.annotations.NotNull()
    private final kotlinx.coroutines.flow.StateFlow<com.satya.app.ui.chat.ChatUiState> uiState = null;
    
    @javax.inject.Inject()
    public ChatViewModel(@org.jetbrains.annotations.NotNull()
    com.satya.app.data.repository.ChatRepository repository, @org.jetbrains.annotations.NotNull()
    com.satya.app.data.repository.SettingsRepository settingsRepository, @org.jetbrains.annotations.NotNull()
    androidx.lifecycle.SavedStateHandle savedStateHandle) {
        super();
    }
    
    @org.jetbrains.annotations.NotNull()
    public final kotlinx.coroutines.flow.StateFlow<com.satya.app.ui.chat.ChatUiState> getUiState() {
        return null;
    }
    
    private final void loadSession() {
    }
    
    private final void loadMessages() {
    }
    
    public final void sendMessage(@org.jetbrains.annotations.NotNull()
    java.lang.String content, @org.jetbrains.annotations.NotNull()
    java.lang.String model) {
    }
}