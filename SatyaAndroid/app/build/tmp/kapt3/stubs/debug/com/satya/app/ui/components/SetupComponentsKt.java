package com.satya.app.ui.components;

import androidx.compose.foundation.layout.*;
import androidx.compose.foundation.lazy.grid.GridCells;
import androidx.compose.material3.*;
import androidx.compose.runtime.*;
import androidx.compose.ui.Alignment;
import androidx.compose.ui.Modifier;
import androidx.compose.ui.text.font.FontWeight;
import com.satya.app.model.ModelInfo;

@kotlin.Metadata(mv = {1, 9, 0}, k = 2, xi = 48, d1 = {"\u0000*\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\u001a$\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0012\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00010\u0005H\u0007\u001a*\u0010\u0006\u001a\u00020\u00012\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\b2\u0012\u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\u00010\u0005H\u0007\u001a$\u0010\u000b\u001a\u00020\u00012\u0006\u0010\f\u001a\u00020\r2\u0012\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u00010\u0005H\u0007\u00a8\u0006\u000f"}, d2 = {"ChairmanSelector", "", "selectedId", "", "onIdChange", "Lkotlin/Function1;", "ModelGrid", "selectedModels", "", "Lcom/satya/app/model/ModelInfo;", "onToggleModel", "RoundsSlider", "value", "", "onValueChange", "app_debug"})
public final class SetupComponentsKt {
    
    @androidx.compose.runtime.Composable()
    public static final void ModelGrid(@org.jetbrains.annotations.NotNull()
    java.util.List<com.satya.app.model.ModelInfo> selectedModels, @org.jetbrains.annotations.NotNull()
    kotlin.jvm.functions.Function1<? super com.satya.app.model.ModelInfo, kotlin.Unit> onToggleModel) {
    }
    
    @androidx.compose.runtime.Composable()
    public static final void RoundsSlider(int value, @org.jetbrains.annotations.NotNull()
    kotlin.jvm.functions.Function1<? super java.lang.Integer, kotlin.Unit> onValueChange) {
    }
    
    @kotlin.OptIn(markerClass = {androidx.compose.material3.ExperimentalMaterial3Api.class})
    @androidx.compose.runtime.Composable()
    public static final void ChairmanSelector(@org.jetbrains.annotations.NotNull()
    java.lang.String selectedId, @org.jetbrains.annotations.NotNull()
    kotlin.jvm.functions.Function1<? super java.lang.String, kotlin.Unit> onIdChange) {
    }
}