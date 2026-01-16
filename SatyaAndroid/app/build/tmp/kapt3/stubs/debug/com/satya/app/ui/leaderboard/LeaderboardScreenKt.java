package com.satya.app.ui.leaderboard;

import androidx.compose.foundation.layout.*;
import androidx.compose.material3.*;
import androidx.compose.runtime.Composable;
import androidx.compose.ui.Alignment;
import androidx.compose.ui.Modifier;
import androidx.compose.ui.text.font.FontWeight;

@kotlin.Metadata(mv = {1, 9, 0}, k = 2, xi = 48, d1 = {"\u0000,\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\u001a\u0018\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u0007\u001a\u0012\u0010\u0006\u001a\u00020\u00012\b\b\u0002\u0010\u0007\u001a\u00020\bH\u0007\u001a\"\u0010\t\u001a\u00020\u00012\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u000b2\b\b\u0002\u0010\r\u001a\u00020\u000eH\u0007\u00a8\u0006\u000f"}, d2 = {"LeaderboardRow", "", "rank", "", "entry", "Lcom/satya/app/ui/leaderboard/LeaderboardEntry;", "LeaderboardScreen", "viewModel", "Lcom/satya/app/ui/leaderboard/LeaderboardViewModel;", "StatCard", "label", "", "value", "modifier", "Landroidx/compose/ui/Modifier;", "app_debug"})
public final class LeaderboardScreenKt {
    
    @kotlin.OptIn(markerClass = {androidx.compose.material3.ExperimentalMaterial3Api.class})
    @androidx.compose.runtime.Composable()
    public static final void LeaderboardScreen(@org.jetbrains.annotations.NotNull()
    com.satya.app.ui.leaderboard.LeaderboardViewModel viewModel) {
    }
    
    @androidx.compose.runtime.Composable()
    public static final void StatCard(@org.jetbrains.annotations.NotNull()
    java.lang.String label, @org.jetbrains.annotations.NotNull()
    java.lang.String value, @org.jetbrains.annotations.NotNull()
    androidx.compose.ui.Modifier modifier) {
    }
    
    @androidx.compose.runtime.Composable()
    public static final void LeaderboardRow(int rank, @org.jetbrains.annotations.NotNull()
    com.satya.app.ui.leaderboard.LeaderboardEntry entry) {
    }
}