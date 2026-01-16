package com.satya.app.ui.research;

import androidx.lifecycle.ViewModel;
import com.satya.app.data.remote.MessageDto;
import com.satya.app.data.repository.ChatRepository;
import com.satya.app.data.repository.SettingsRepository;
import com.satya.app.model.ModelInfo;
import dagger.hilt.android.lifecycle.HiltViewModel;
import javax.inject.Inject;

@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000b\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\t\n\u0002\b\u0003\b\u0007\u0018\u00002\u00020\u0001B\u0017\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u00a2\u0006\u0002\u0010\u0006J\u0006\u0010$\u001a\u00020%J\u001a\u0010&\u001a\u00020%2\u0012\u0010\'\u001a\u000e\u0012\u0004\u0012\u00020)\u0012\u0004\u0012\u00020%0(J\u000e\u0010*\u001a\u00020%2\u0006\u0010+\u001a\u00020\u001dR\u0014\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\bX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u001a\u0010\n\u001a\u00020\u000bX\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\b\f\u0010\r\"\u0004\b\u000e\u0010\u000fR\u0010\u0010\u0010\u001a\u0004\u0018\u00010\u0011X\u0082\u000e\u00a2\u0006\u0002\n\u0000R\u001a\u0010\u0012\u001a\u00020\u000bX\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\b\u0013\u0010\r\"\u0004\b\u0014\u0010\u000fR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u001a\u0010\u0015\u001a\u00020\u0016X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\b\u0017\u0010\u0018\"\u0004\b\u0019\u0010\u001aR\u0017\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u001d0\u001c\u00a2\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0017\u0010 \u001a\b\u0012\u0004\u0012\u00020\t0!\u00a2\u0006\b\n\u0000\u001a\u0004\b\"\u0010#\u00a8\u0006,"}, d2 = {"Lcom/satya/app/ui/research/ResearchViewModel;", "Landroidx/lifecycle/ViewModel;", "repository", "Lcom/satya/app/data/repository/ChatRepository;", "settingsRepository", "Lcom/satya/app/data/repository/SettingsRepository;", "(Lcom/satya/app/data/repository/ChatRepository;Lcom/satya/app/data/repository/SettingsRepository;)V", "_uiState", "Lkotlinx/coroutines/flow/MutableStateFlow;", "Lcom/satya/app/ui/research/ResearchUiState;", "chairmanId", "", "getChairmanId", "()Ljava/lang/String;", "setChairmanId", "(Ljava/lang/String;)V", "deliberationJob", "Lkotlinx/coroutines/Job;", "prompt", "getPrompt", "setPrompt", "roundsCount", "", "getRoundsCount", "()I", "setRoundsCount", "(I)V", "selectedModels", "Landroidx/compose/runtime/snapshots/SnapshotStateList;", "Lcom/satya/app/model/ModelInfo;", "getSelectedModels", "()Landroidx/compose/runtime/snapshots/SnapshotStateList;", "uiState", "Lkotlinx/coroutines/flow/StateFlow;", "getUiState", "()Lkotlinx/coroutines/flow/StateFlow;", "cancelDeliberation", "", "startCouncil", "onComplete", "Lkotlin/Function1;", "", "toggleModel", "model", "app_debug"})
@dagger.hilt.android.lifecycle.HiltViewModel()
public final class ResearchViewModel extends androidx.lifecycle.ViewModel {
    @org.jetbrains.annotations.NotNull()
    private final com.satya.app.data.repository.ChatRepository repository = null;
    @org.jetbrains.annotations.NotNull()
    private final com.satya.app.data.repository.SettingsRepository settingsRepository = null;
    @org.jetbrains.annotations.NotNull()
    private final kotlinx.coroutines.flow.MutableStateFlow<com.satya.app.ui.research.ResearchUiState> _uiState = null;
    @org.jetbrains.annotations.NotNull()
    private final kotlinx.coroutines.flow.StateFlow<com.satya.app.ui.research.ResearchUiState> uiState = null;
    @org.jetbrains.annotations.NotNull()
    private final androidx.compose.runtime.snapshots.SnapshotStateList<com.satya.app.model.ModelInfo> selectedModels = null;
    private int roundsCount = 1;
    @org.jetbrains.annotations.NotNull()
    private java.lang.String chairmanId = "anthropic/claude-3.5-sonnet";
    @org.jetbrains.annotations.NotNull()
    private java.lang.String prompt = "";
    @org.jetbrains.annotations.Nullable()
    private kotlinx.coroutines.Job deliberationJob;
    
    @javax.inject.Inject()
    public ResearchViewModel(@org.jetbrains.annotations.NotNull()
    com.satya.app.data.repository.ChatRepository repository, @org.jetbrains.annotations.NotNull()
    com.satya.app.data.repository.SettingsRepository settingsRepository) {
        super();
    }
    
    @org.jetbrains.annotations.NotNull()
    public final kotlinx.coroutines.flow.StateFlow<com.satya.app.ui.research.ResearchUiState> getUiState() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final androidx.compose.runtime.snapshots.SnapshotStateList<com.satya.app.model.ModelInfo> getSelectedModels() {
        return null;
    }
    
    public final int getRoundsCount() {
        return 0;
    }
    
    public final void setRoundsCount(int p0) {
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getChairmanId() {
        return null;
    }
    
    public final void setChairmanId(@org.jetbrains.annotations.NotNull()
    java.lang.String p0) {
    }
    
    @org.jetbrains.annotations.NotNull()
    public final java.lang.String getPrompt() {
        return null;
    }
    
    public final void setPrompt(@org.jetbrains.annotations.NotNull()
    java.lang.String p0) {
    }
    
    public final void toggleModel(@org.jetbrains.annotations.NotNull()
    com.satya.app.model.ModelInfo model) {
    }
    
    public final void startCouncil(@org.jetbrains.annotations.NotNull()
    kotlin.jvm.functions.Function1<? super java.lang.Long, kotlin.Unit> onComplete) {
    }
    
    public final void cancelDeliberation() {
    }
}