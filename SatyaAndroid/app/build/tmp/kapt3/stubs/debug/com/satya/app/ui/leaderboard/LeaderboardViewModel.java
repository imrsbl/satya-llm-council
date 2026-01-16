package com.satya.app.ui.leaderboard;

import androidx.lifecycle.ViewModel;
import com.satya.app.data.local.SessionEntity;
import com.satya.app.data.repository.ChatRepository;
import dagger.hilt.android.lifecycle.HiltViewModel;
import kotlinx.coroutines.flow.*;
import javax.inject.Inject;

@kotlin.Metadata(mv = {1, 9, 0}, k = 1, xi = 48, d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u000f\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0002\u0010\u0004J\u001c\u0010\u0010\u001a\b\u0012\u0004\u0012\u00020\u000b0\n2\f\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00120\nH\u0002J\u0010\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0007R\u0016\u0010\u0005\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u0006X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u001d\u0010\b\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u000b0\n0\t\u00a2\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0019\u0010\u000e\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\t\u00a2\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\r\u00a8\u0006\u0016"}, d2 = {"Lcom/satya/app/ui/leaderboard/LeaderboardViewModel;", "Landroidx/lifecycle/ViewModel;", "repository", "Lcom/satya/app/data/repository/ChatRepository;", "(Lcom/satya/app/data/repository/ChatRepository;)V", "_tagFilter", "Lkotlinx/coroutines/flow/MutableStateFlow;", "", "leaderboardData", "Lkotlinx/coroutines/flow/StateFlow;", "", "Lcom/satya/app/ui/leaderboard/LeaderboardEntry;", "getLeaderboardData", "()Lkotlinx/coroutines/flow/StateFlow;", "tagFilter", "getTagFilter", "calculateLeaderboard", "sessions", "Lcom/satya/app/data/local/SessionEntity;", "setTagFilter", "", "tag", "app_debug"})
@dagger.hilt.android.lifecycle.HiltViewModel()
public final class LeaderboardViewModel extends androidx.lifecycle.ViewModel {
    @org.jetbrains.annotations.NotNull()
    private final com.satya.app.data.repository.ChatRepository repository = null;
    @org.jetbrains.annotations.NotNull()
    private final kotlinx.coroutines.flow.MutableStateFlow<java.lang.String> _tagFilter = null;
    @org.jetbrains.annotations.NotNull()
    private final kotlinx.coroutines.flow.StateFlow<java.lang.String> tagFilter = null;
    @org.jetbrains.annotations.NotNull()
    private final kotlinx.coroutines.flow.StateFlow<java.util.List<com.satya.app.ui.leaderboard.LeaderboardEntry>> leaderboardData = null;
    
    @javax.inject.Inject()
    public LeaderboardViewModel(@org.jetbrains.annotations.NotNull()
    com.satya.app.data.repository.ChatRepository repository) {
        super();
    }
    
    @org.jetbrains.annotations.NotNull()
    public final kotlinx.coroutines.flow.StateFlow<java.lang.String> getTagFilter() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final kotlinx.coroutines.flow.StateFlow<java.util.List<com.satya.app.ui.leaderboard.LeaderboardEntry>> getLeaderboardData() {
        return null;
    }
    
    public final void setTagFilter(@org.jetbrains.annotations.Nullable()
    java.lang.String tag) {
    }
    
    private final java.util.List<com.satya.app.ui.leaderboard.LeaderboardEntry> calculateLeaderboard(java.util.List<com.satya.app.data.local.SessionEntity> sessions) {
        return null;
    }
}